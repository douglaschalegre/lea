import { Button } from "./components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogFooter, DialogClose } from "./components/ui/dialog"
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell } from "./components/ui/table"
import { Input } from "./components/ui/input"

type Student = {
    name: string
    course: string
    period: string
    college: string
    birthDate: number
}

const mockData: Student[] = [
  {
    name: "John Doe",
    course: "Computer Science",
    period: "Morning",
    college: "Harvard",
    birthDate: 21,
  },
  {
    name: "Jane Doe",
    course: "Law",
    period: "Night",
    college: "Yale",
    birthDate: 23,
  },
  {
    name: "Alice Doe",
    course: "Medicine",
    period: "Morning",
    college: "Stanford",
    birthDate: 25,
  },
  {
    name: "Bob Doe",
    course: "Engineering",
    period: "Night",
    college: "MIT",
    birthDate: 22,
  },
]

function handleAdd({name, course, period, college, birthDate}: {name: string, course: string, period: string, college: string, birthDate: number}) {
    mockData.push({ name , course, period, college, birthDate })
}

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
                    <form className="mt-2">
                        <div className="grid grid-cols-6 gap-4 sm:grid-cols-4">
                            <div className="col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                                <Input type="text" name="name" id="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="bithdate" className="block text-sm font-medium text-gray-700">Data de nascimento</label>
                                <Input type="text" placeholder="DD/MM/AAAA" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} name="bithdate" id="bithdate" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div className="col-span-3">
                                <label htmlFor="college" className="block text-sm font-medium text-gray-700">Faculdade</label>
                                <Input type="text" name="college" id="college" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Curso</label>
                                <Input type="text" name="course" id="course" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="period" className="block text-sm font-medium text-gray-700">Período</label>
                                <Input type="number" name="period" id="period" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                        </div>
                        <DialogFooter className="">
                            <div className="mt-8 flex gap-2 justify-end">
                                <DialogClose asChild>
                                    <Button variant="ghost" className="px-4 py-2 gap-2 sm:px-6">Cancelar</Button>
                                </DialogClose>
                                <Button
                                  type="submit"
                                  variant="default"
                                  className="px-4 py-2 gap-2 sm:px-6"
                                  onClick={e => {
                                    handleAdd({
                                      name: e.target.form.name.value,
                                      course: e.target.form.course.value,
                                      period: e.target.form.period.value,
                                      college: e.target.form.college.value,
                                      birthDate: e.target.form.bithdate.value
                                    });
                                  }}
                                >
                                  Adicionar
                                </Button>
                            </div>
                        </DialogFooter>
                    </form>
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
                <TableCell>{data.birthDate}</TableCell>
            </TableRow>
        ))}
    </TableBody>
   </Table>
   </>
  )
}
