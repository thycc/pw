self.addEventListener('push', function(e) {
    var options = {
        body: 'Esta es una notificacion push!',
        icon: 'images/logo.png',
        vibrate: [100, 50, 100],
        data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
        },
        actions: [
        {action: 'explore', title: 'Enterate de nuestras promociones',
            icon: 'images/checkmark.png'},
        {action: 'close', title: 'Cerrar',
            icon: 'images/xmark.png'},
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hola Mundo!', options)
    );
});
