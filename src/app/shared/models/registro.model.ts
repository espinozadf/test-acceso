import { Persona } from "./persona.model";


export interface Registro {
  id: number,
  persona_id: number,
  fecha_registro: string,
  tipo_registro: string,
  created_at?: string,
  updated_at?: string,
  persona: Persona
}
