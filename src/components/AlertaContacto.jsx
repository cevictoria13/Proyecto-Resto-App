import swal from 'sweetalert'

export const AlertaContacto = () => {
    swal({
        title: "Mensaje enviado exitosamente",
        text: "Gracias por comunicarse con nosotros",
        icon: "success",
        button: "Aceptar"
    })

        .then((confirmed) => {
            if (confirmed) {
                // Aquí puedes realizar una acción después de que el usuario haya aceptado la alerta.
                window.location.reload();
            }
        });

}