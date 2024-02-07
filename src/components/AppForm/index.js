import './Form.css'
import TextField from "../TextField/TextField"
import ListaSuspensa from '../ListaSuspensa'
import Button from '../Button'

const Form = () =>{

    const times = [
        'Programação',
        'Front End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovaçao e Gestao'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log("Form foi submetido")
    }

    return(
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <TextField label="Imagem" placeholder="Digite a sua imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form