import { useEffect, useState } from "react";
import { Subject } from "rxjs";


export interface ISubscribable {
    onChange: Subject<any>
}


export function useRerenderOnSubscribableChange(subscribable: ISubscribable) {

    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {

        if (subscribable) {
            const sub = subscribable.onChange.subscribe(() => {
                // console.log("rerender", subscribable)
                setCounter((counter + 1))
            })
            return () => sub.unsubscribe()
        }

    }, [subscribable, counter, setCounter])



    return counter

}