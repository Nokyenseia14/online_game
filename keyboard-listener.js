export default function createkeyboardListener() {
    const state = {
        observers:[]
        
    }
    function subscribe(observerFunction) {
        state.observers.push(observerFunction)
    }

    function notifyAll(command) {

        for (const observerFunction of state.observers) {
            observerFunction(command)
        }
    }

    document.addEventListener('keydown', handlekeydown)

 function handlekeydown(event) {
   const keyPessed = event.key

   const command = {
    playerId: 'player1',
    keyPessed
   }

   
   notifyAll(command)

 }
 return{
    subscribe
 }
 }