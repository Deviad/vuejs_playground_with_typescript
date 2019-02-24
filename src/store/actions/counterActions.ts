import {counterMutationTypes} from "@/store/actions";
import {ICounterActions} from "@/store/actions";
import {interval, from, of, ReplaySubject} from 'rxjs';
import {mapTo, delay, exhaustMap, concatMap} from 'rxjs/operators';

const counterActions: ICounterActions = {
  incrementAsync ({ commit }) {
    // setTimeout(() => {
    //   commit(counterMutationTypes.increment)
    // }, 0)
    let subject$ = null;
    if(subject$ == null)
    {
      subject$ = new ReplaySubject();
      console.log('IS NULL')
    }

    from(subject$)
      .pipe(
        concatMap(val=> of(val).pipe(delay(2000))),
        exhaustMap (
          ()=>interval(10000000)
            .pipe(
              mapTo(commit(counterMutationTypes.increment)),
            )
        )
      ).toPromise();

    subject$.next()

  }
};

export default counterActions;
