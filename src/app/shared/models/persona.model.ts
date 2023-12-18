import { Area } from "./area.model";
import { Cargo } from "./cargo.model";
import { Empresa } from "./empresa.model";
import { Estado } from "./estado.model";
import { Registro } from "./registro.model";

export interface Persona {
  id: number;
  cod_ext: number;
  nombres: string;
  apellidop: string;
  apellidom: string;
  fullname: string;
  rut: string;
  rut_cod: string;
  email: string;
  picture_id: string;
  status: string;
  area_id: number;
  empresa_id: number;
  cargo_id: number;
  estado_id: number;
  fecha_carga: Date;
  created_at: Date;
  updated_at: Date;
  estado: Estado;
  area: Area;
  empresa: Empresa;
  cargo: Cargo;
  registros: Registro[];
}
