import { uid } from 'uid';

// ================= IMGS ====================
import expresso from '../assets/coffesImages/expresso.svg'
import americano from '../assets/coffesImages/americano.svg'
import cremoso from '../assets/coffesImages/cremoso.svg'
import expressoGelado from '../assets/coffesImages/cafeGelado.svg'
import cafeComLeite from '../assets/coffesImages/cafeComLeite.svg'
import latte from '../assets/coffesImages/latte.svg'
import capucciono from '../assets/coffesImages/capucciono.svg'
import macchiato from '../assets/coffesImages/macchiato.svg'
import mocaccino from '../assets/coffesImages/mocaccino.svg'
import chocolateQuente from '../assets/coffesImages/chocolateQuente.svg'
import cubano from '../assets/coffesImages/cubano.svg'
import havaiano from '../assets/coffesImages/havaiano.svg'
import arabe from '../assets/coffesImages/arabe.svg'
import irlandes from '../assets/coffesImages/irlandes.svg'


export interface CoffeType{
    id: string;
    img: string;
    tag: string[]
    name: string
    description: string
    value: string
    quantity: number
}

export const coffes : CoffeType[] = [
    {
        id: uid(),
        img: expresso,
        description: 'O tradicional café feito com água quente e grãos moídos',
        name: 'Expresso Tradicional',
        tag: ['Tradicional'],
        value: '9,90',
        quantity: 1,
    },
    {
        id: uid(),
        img: americano,
        description: 'Expresso diluído, menos intenso que o tradicional',
        name: 'Expresso Americano',
        tag: ['Tradicional'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: cremoso,
        description: 'Café expresso tradicional com espuma cremosa',
        name: 'Expresso Cremoso',
        tag: ['Tradicional'],
        value: '9,90',
        quantity: 1,
        
    },
    {
        id: uid(),
        img: expressoGelado,
        description: 'Bebida preparada com café expresso e cubos de gelo',
        name: 'Expresso Gelado',
        tag: ['Tradicional', 'Gelado'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: cafeComLeite,
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        name: 'Café com Leite',
        tag: ['Tradicional', 'Com leite'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: latte,
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        name: 'Latte',
        tag: ['Tradicional', 'Com leite'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: capucciono,
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        name: 'Capuccino',
        tag: ['Tradicional', 'Com leite'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: macchiato,
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        name: 'Macchiato',
        tag: ['Tradicional', 'Com leite'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: mocaccino,
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        name: 'Mocaccino',
        tag: ['Tradicional', 'Com leite'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: chocolateQuente,
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        name: 'Chocolate Quente',
        tag: ['Especial', 'Com leite'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: cubano,
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        name: 'Cubano',
        tag: ['Especial', 'Alcoólico', 'Gelado'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: havaiano,
        description: 'Bebida adocicada preparada com café e leite de coco',
        name: 'Havaiano',
        tag: ['Especial'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: arabe,
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        name: 'Árabe',
        tag: ['Especial'],
        value: '9,90',
        quantity: 1,

    },
    {
        id: uid(),
        img: irlandes,
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        name: 'Irlandês',
        tag: ['Especial', 'Alcoólico'],
        value: '9,90',
        quantity: 1,

    },
]

