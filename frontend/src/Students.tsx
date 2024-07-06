import { Button } from "./components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "./components/ui/dialog"
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell } from "./components/ui/table"

const mockData = [
  {
    name: "John Doe",
    course: "Computer Science",
    period: "Morning",
    college: "Harvard",
    age: 21,
  },
  {
    name: "Jane Doe",
    course: "Law",
    period: "Night",
    college: "Yale",
    age: 23,
  },
  {
    name: "Alice Doe",
    course: "Medicine",
    period: "Morning",
    college: "Stanford",
    age: 25,
  },
  {
    name: "Bob Doe",
    course: "Engineering",
    period: "Night",
    college: "MIT",
    age: 22,
  },
]

export function Students() {
  return (
    <>
    <div className="mt-4 px-4 sm:px-6 gap-4 md:mt-0 flex items-baseline">
        <h1 className="text-2xl font-semibold">Alunos</h1>
        <p className="align-baseline flex text-gray-700/80">
            Visualize os alunos cadastrados no sistema.</p>
        <div className="ml-auto flex-1 relative md:grow-0">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default" className="px-4 py-2 gap-2 sm:px-6">Adicionar</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Adicionar aluno</DialogTitle>
                        <DialogDescription>Adicione um novo aluno ao sistema.</DialogDescription>
                    </DialogHeader>
                    <div>
                        
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    </div>
   <Table>
    <TableCaption>Lista de alunos cadastrados no sistema</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Período</TableHead>
            <TableHead>Faculdade</TableHead>
            <TableHead>Idade</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {mockData.map((data) => (
            <TableRow key={data.name}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.course}</TableCell>
                <TableCell>{data.period}</TableCell>
                <TableCell>{data.college}</TableCell>
                <TableCell>{data.age}</TableCell>
            </TableRow>
        ))}
    </TableBody>
   </Table>
   </>
  )
}
