const url = 'http://localhost:4000/clientes';

// When a client is created
export const nuevoCliente = async cliente => {
    
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error); 
    }
}

// Gets all clients
export const obtenerClientes = async () => {  // Use a function expression
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// Delete a client
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`,  {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
} 

//Gets a client for id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;

    } catch (error) {
        console.log(error);
    }
}

//Update a register
export const editarCliente =  async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';

    } catch (error) {
        console.group(error);
    }
} 