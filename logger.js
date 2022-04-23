export default function(reducer){
    return (preState,action,arg)=>{
        console.group(action)
        console.log('Previous state: ',preState)
        console.log('Argument action: ',arg)

        const nextState=reducer(preState,action,arg)
        console.log('Next state: ',nextState)
        console.groupEnd()

        return nextState;
    }
}