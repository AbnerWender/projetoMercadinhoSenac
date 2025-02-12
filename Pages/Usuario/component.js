const mostrarUsuario = ({email, name, username, phone}) => {
    return `
    <form name="infoUsuario"
        <div id="container">
            <input type="mail" value=${email} disable>
            <input type="text" value=${name.firstname} disable>
            <input type="text" value=${name.lastname}>
            <input type="text" value=${username}>
            <input type="text" value=${phone}>
        </div>
        `;
}
export default mostrarUsuario;