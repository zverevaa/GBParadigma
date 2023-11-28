sumlist([], 0).
sumlist([H | T], Sum) :-
    sumlist(T, SumRest),
    Sum is H + SumRest.