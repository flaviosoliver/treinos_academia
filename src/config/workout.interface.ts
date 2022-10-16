export default interface Workout {
  id: number;
  treino: string;
  nome: string;
  exercicio: string;
  foco: string[];
  series: number;
  repeticoes: number;
  carga: string;
  imagem: {
    src: string;
    alt: string;
  };
  video: string;
  obs: string;
}
