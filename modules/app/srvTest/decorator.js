//декорирование сервиса
function userServicesLog($delegate, $log){
    return {
        getUser: getUser,
        setUser: setUser
    };

    function getUser(){
        $log.info("Call getUser " + new Date());
        //вызов методов у сервиса который декорируем
        return $delegate.getUser();
    };

    function setUser(value){
        $log.info("Call setUser " + new Date());
        //вызов методов у сервиса который декорируем
        $delegate.setUser(value);
    }
}
