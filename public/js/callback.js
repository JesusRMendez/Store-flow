const settings = {
    response_mode: 'query',
    userStore: new Oidc.WebStorageStateStore({ store: window.sessionStorage }),
}

const userManager = new Oidc.UserManager(settings)

userManager
    .signinRedirectCallback()
    .then((_) => {
        const pathName = window.location.pathname.split('/')
        let url = '../'
        if (pathName.length > 2) {
            //Indica que es una carpeta esto es unicamente para probar en sub-carpeta tomar en cuenta
            url = window.location.origin + '/' + pathName[1] + '/'
        }
        window.location.href = url
    })
    .catch((error) => {
        console.log(error)
    })