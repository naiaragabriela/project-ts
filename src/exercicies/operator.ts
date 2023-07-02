//Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'o titulo',
  texto: 'o texto',
  data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data');
