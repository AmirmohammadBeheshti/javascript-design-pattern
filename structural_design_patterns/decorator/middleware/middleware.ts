interface IRequest {
    isAuth: boolean
    body: {
        text: string
    }
}

const requestInfo: IRequest = {
    isAuth: true,
    body: { text: "Hello World" }
}

interface IServerRequest {
    handle(request: IRequest) : void
}

class BaseServer implements IServerRequest {
    constructor(){}
    handle(request: IRequest): void {
        console.log("Handle Request");
    }
}

abstract class BaseServerDecorator implements IServerRequest {
    constructor(protected serverReq: IServerRequest ){
    }
    handle(request: IRequest): void {}
}


class AuthMiddleware extends BaseServerDecorator {
    handle(request: IRequest): void {
        if(request.isAuth){
            console.log("User Is Authenticated");
            this.serverReq.handle(request)
        }else {
            console.log("User Is Not Authenticated");
        }

    }
}

class LoggingMiddleware extends BaseServerDecorator {
    handle(request: IRequest): void {
            console.log("Log Request =>" , request );
    }
}

let server = new BaseServer()

server = new LoggingMiddleware(server)

server = new AuthMiddleware(server)

server.handle(requestInfo)


