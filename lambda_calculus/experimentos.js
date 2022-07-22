let r

const i = a => a

r = i(3)
r

r = i(i)
r

const self = f => f(f)

r = self(i)
r

const first = a => _ => a
r = first(9)(22)
r

const flip = fn => x => y => fn(y)(x)
r = flip(first)(9)(22)
r

const last = a => b => flip(first)(a)(b)
r = last(9)(23)
r

// boolean operators True or False
// True ? <first> : last
// False ? first : <last>

const T = first
const F = last

T.inspect = () => 'True (first)'
F.inspect = () => 'False (last)'

T
F

// NOT
const NOT = a => a(F)(T)
r = NOT(first)(6)(22)
r

r = NOT(last)(6)(22)
r

r = NOT(T)
r

r = NOT(F)
r

// AND
const AND = a => b => a(b)(F)
r = AND(T)(T)
r

// OR
const OR = a => b => a(T)(b)
r = OR(F)(T)
r

// EQ igualdade booleana
const EQ = a => b => a(b)(NOT(b))
r = EQ(T)(T)
r

r = EQ(F)(T)
r

r = EQ(T)(F)
r

r = EQ(F)(F)
r

// XOR
const XOR = a => b => NOT(EQ(a)(b))
r = XOR(T)(T)
r

r = XOR(T)(F)
r

r = XOR(F)(T)
r

r = XOR(F)(F)
r