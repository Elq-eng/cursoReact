const { response } = require('express')
const Evento = require('../models/Evento')



// obtener eventos
const getEventos = async ( req,res=response )=>{

  const eventos = await Evento.find()
                              .populate('user','name');
  res.json({
    ok:true,
    eventos
  })
}


// crear eventos
const crearEvento = async( req,res=response )=>{

  const evento = new Evento( req.body )
  try {

    evento.user = req.uid
    const eventoGuardado = await evento.save()


    res.json({
      ok: true,
      evento: eventoGuardado
    })
    
  } catch (error) {
    res.status(500).json({
      ok:false,
      msg:'Hable con el administrador'
    })
  }
}


// actualizar eventos 
const actualizarEvento = async ( req,res=response )=>{

  const eventId = req.params.id;
  const uid = req.uid

  try {
    const evento = await Evento.findById( eventId )

    if( !evento ){
      return res.status(404).json({
        ok:false,
        msg:'Evento no existe'
      })
    }

    if ( evento.user.toString() !== uid ){
      return res.status(401).json({
        ok:false,
        msg: 'No tiene privilegio de editar ese evento'
      })
    }

    const nuevoEvento = {
      ...req.body,
      user: uid
    }

    const eventoActualizado = await Evento.findByIdAndUpdate( eventId, nuevoEvento, { new: true } )

    return res.json({
      ok:true,
      evento: eventoActualizado
    })


  } catch (error) {
    res.status(500).json({
      ok:false,
      msg:'Hable con el administrador'
    })
  }


  
}

const eliminarEvento = async ( req,res=response )=>{

  const eventId = req.params.id;
  const uid = req.uid

  try {
    const evento = await Evento.findById( eventId )

    if( !evento ){
      return res.status(404).json({
        ok:false,
        msg:'Evento no existe'
      })
    }
    await Evento.findByIdAndDelete( eventId )

    return res.json({
      ok:true,
 
    })


  } catch (error) {
    res.status(500).json({
      ok:false,
      msg:'Hable con el administrador'
    })
  }

  res.json({
    ok:true,
    msg:'eliminarEvento'
  })
}


module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento 
}
