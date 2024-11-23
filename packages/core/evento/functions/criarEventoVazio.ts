import { Id } from "../../shared";
import Evento from "../model/Evento";

export default function CriarEventoVazio(): Partial<Evento>{
    return {
        id: Id.novo(),
        nome:"",
        descricao:"",
        data:new Date(),
        local:"",
        publicoEsperado:1,
        imagem:"",
        imagemBackground:"",

    };
}