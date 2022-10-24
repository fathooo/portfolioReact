const task = [{
    id: 1,
    title: 'Evaluar primer balance',
    description: 'Considerar las evaluaciones estadísticas y definiciones del libro 2.',
    status: 'TERMINADO',
    ready: false,
    timeExpiration: '2022-10-18T00:00',
    priority: 'MEDIA',
    assignee: 'A mí'
},
{
    id: 2,
    title: 'Integrar sistema de comunicación',
    description: 'Integrar el sistema de comunicación con el sistema de facturación.',
    status: 'EN PROGRESO',
    ready: false,
    timeExpiration: '2022-09-18T00:00',
    priority: 'BAJA',
    assignee: 'Otro usuario'
},
{
    id: 3,
    title: 'Incorporar nuevos usuarios',
    description: 'Incorporar nuevos usuarios al sistema de facturación.',
    status: 'POR HACER',
    ready: true,
    timeExpiration: '2022-11-18T00:00',
    priority: 'ALTA',
    assignee: 'A mí'
}]

const assignee = [{
    id: 1,
    name: 'A mí',
    email: ''
},
{
    id: 2,
    name: 'Otro usuario',
    email: ''
}]

const priority = [
    {
        "id": 1,
        "name": "BAJA"
    },
    {
        "id": 2,
        "name": "MEDIA"
    },
    {
        "id": 3,
        "name": "ALTA"
    }
]

const status = [
    {
        "id": 1,
        "name": "POR HACER"
    },
    {
        "id": 2,
        "name": "EN PROGRESO"
    },
    {
        "id": 3,
        "name": "TERMINADO"
    }
]

export { task, assignee, priority, status }