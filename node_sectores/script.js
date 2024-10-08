const fs = require('fs');

const sectores = [
    { id: 1, sector: "16 DE AGOSTO" },
    { id: 2, sector: "24 DE ABRIL" },
    { id: 3, sector: "27 DE FEBRERO" },
    { id: 4, sector: "30 DE MAYO" },
    { id: 5, sector: "AESA" },
    { id: 6, sector: "AGUA DULCE" },
    { id: 7, sector: "ALEXANDRA" },
    { id: 8, sector: "ALFIMAR" },
    { id: 9, sector: "ALTOS DE ARROYO HONDO" },
    { id: 10, sector: "ALTOS DE ARROYO HONDO I" },
    { id: 11, sector: "ALTOS DE ARROYO HONDO II" },
    { id: 12, sector: "ALTOS DE ARROYO HONDO III" },
    { id: 13, sector: "ALTOS DE LAS PRADERAS" },
    { id: 14, sector: "ALTURAS DE COSTA CRIOLLA" },
    { id: 15, sector: "AMBAR PATRICIA" },
    { id: 16, sector: "ANTILLAS" },
    { id: 17, sector: "APOLO 1" },
    { id: 18, sector: "ARBOLEDA" },
    { id: 19, sector: "ARCOIRIS DEL SUR" },
    { id: 20, sector: "ARROYO HONDO" },
    { id: 21, sector: "ARROYO HONDO II" },
    { id: 22, sector: "ARROYO HONDO III" },
    { id: 23, sector: "ARROYO HONDO VIEJO" },
    { id: 24, sector: "ARROYO MANZANO" },
    { id: 25, sector: "ATALA" },
    { id: 26, sector: "ATLÁNTIDA" },
    { id: 27, sector: "BARRIO AZUL" },
    { id: 28, sector: "BARRIO CHINO" },
    { id: 29, sector: "BARRIO LA OCHOCIENTA" },
    { id: 30, sector: "BARRIO SANTA TERESA" },
    { id: 31, sector: "BARRIO VILLA MARIA DE PANTOJA" },
    { id: 32, sector: "BELLA VISTA" },
    { id: 33, sector: "BETA" },
    { id: 34, sector: "BO. LA ANTENA" },
    { id: 35, sector: "BOROJOL" },
    { id: 36, sector: "BRISAS DEL MAR" },
    { id: 37, sector: "BRISAS DEL NORTE" },
    { id: 38, sector: "BUEN VIVIR" },
    { id: 39, sector: "BUENA VISTA" },
    { id: 40, sector: "BUENOS AIRES MIRADOR" },
    { id: 41, sector: "CACIQUE 1" },
    { id: 42, sector: "CACIQUE 2" },
    { id: 43, sector: "CACIQUE 3" },
    { id: 44, sector: "CACIQUE 4" },
    { id: 45, sector: "CAPOTILLO" },
    { id: 46, sector: "CARMELITA" },
    { id: 47, sector: "CARMEN EMILIA" },
    { id: 48, sector: "CARMEN MARÍA" },
    { id: 49, sector: "Carmen Maria l" },
    { id: 50, sector: "CENTAURO" },
    { id: 51, sector: "CENTRO DE LOS HEROES" },
    { id: 52, sector: "CERRO DOÑA LUISA (TOTUMO)" },
    { id: 53, sector: "CERROS DE ARROYO HONDO 3RO." },
    { id: 54, sector: "CIUDAD MODERNA" },
    { id: 55, sector: "CIUDAD NUEVA" },
    { id: 56, sector: "CIUDAD REAL" },
    { id: 57, sector: "CIUDAD REAL I" },
    { id: 58, sector: "CIUDAD REAL II" },
    { id: 59, sector: "COLINA DE ARROYO HONDO" },
    { id: 60, sector: "COLINAS DE LOS RIOS" },
    { id: 61, sector: "COLINAS DEL MANZANO" },
    { id: 62, sector: "COLINAS DEL SEMINARIO" },
    { id: 63, sector: "COLINAS SEMINARIO II" },
    { id: 64, sector: "COLINAS SEMINARIO III" },
    { id: 65, sector: "COND.CIUDAD REAL III" },
    { id: 66, sector: "CONSTELACIÓN" },
    { id: 67, sector: "COPLAN 2" },
    { id: 68, sector: "COSTA BRAVA" },
    { id: 69, sector: "COSTA CARIBE" },
    { id: 70, sector: "CRISTO REY" },
    { id: 71, sector: "CUESTA BRAVA" },
    { id: 72, sector: "CUESTA HERMOSA 1" },
    { id: 73, sector: "CUESTA HERMOSA 2" },
    { id: 74, sector: "CUESTA HERMOSA 3" },
    { id: 75, sector: "CUIDAD REAL III" },
    { id: 76, sector: "DOMINGO SAVIO" },
    { id: 77, sector: "DOMINICANOS AUSENTES" },
    { id: 78, sector: "DON BOSCO" },
    { id: 79, sector: "DON HONORIO" },
    { id: 80, sector: "DON JOSE OSCAR" },
    { id: 81, sector: "DON PANCHITO" },
    { id: 82, sector: "DOÑA CARMEN" },
    { id: 83, sector: "DOÑA DILIA" },
    { id: 84, sector: "EL CACIQUE" },
    { id: 85, sector: "EL CALICHE" },
    { id: 86, sector: "EL CONDADO" },
    { id: 87, sector: "EL CORAL" },
    { id: 88, sector: "EL DUCADO" },
    { id: 89, sector: "EL MANGUITO" },
    { id: 90, sector: "EL MILLON" },
    { id: 91, sector: "EL MILLONCITO" },
    { id: 92, sector: "EL PEDREGAL" },
    { id: 93, sector: "EL PINO" },
    { id: 94, sector: "EL PORTAL" },
    { id: 95, sector: "EL VERGEL" },
    { id: 96, sector: "EL VIVERO" },
    { id: 97, sector: "ENRIQUILLO" },
    { id: 98, sector: "ENS CLARET" },
    { id: 99, sector: "ENS MIRAFLORES" },
    { id: 100, sector: "ENS SERALLES" },
    { id: 101, sector: "ENS. ESPAILLAT" },
    { id: 102, sector: "ENS. KENNEDY" },
    { id: 103, sector: "Ens. La Agustina" },
    { id: 104, sector: "ENS. LA FE" },
    { id: 105, sector: "ENS. LUGO" },
    { id: 106, sector: "ENS. LUPERON" },
    { id: 107, sector: "ENS. LUPERÓN" },
    { id: 108, sector: "ENS. NACO" },
    { id: 109, sector: "ENS. PARAISO" },
    { id: 110, sector: "ENS. PIANTINI" },
    { id: 111, sector: "ENS. QUISQUEYA" },
    { id: 112, sector: "ENS. YOLANDA MORALES" },
    { id: 113, sector: "ESPERANZA" },
    { id: 114, sector: "ESPERILLA" },
    { id: 115, sector: "ESTANCIA NUEVA" },
    { id: 116, sector: "ESTELA MARINA" },
    { id: 117, sector: "EVARISTO MORALES" },
    { id: 118, sector: "FUNDACIÓN" },
    { id: 119, sector: "GACELA" },
    { id: 120, sector: "GALA" },
    { id: 121, sector: "GAZCUE" },
    { id: 122, sector: "GIRASOLES" },
    { id: 123, sector: "GIRASOLES I" },
    { id: 124, sector: "GIRASOLES III" },
    { id: 125, sector: "GUACHUPITA" },
    { id: 126, sector: "GUALEY" },
    { id: 127, sector: "GUANDULES" },
    { id: 128, sector: "HONDURA DEL NORTE" },
    { id: 129, sector: "HONDURAS" },
    { id: 130, sector: "HONDURAS DEL MIRADOR" },
    { id: 131, sector: "HORIZONTES DEL CARIBE" },
    { id: 132, sector: "INDEPENDENCIA" },
    { id: 133, sector: "INVI" },
    { id: 134, sector: "ISABEL VILLAS" },
    { id: 135, sector: "ISABELITA" },
    { id: 136, sector: "JARDINES DE LA ISABELA" },
    { id: 137, sector: "JARDINES DEL CARIBE" },
    { id: 138, sector: "JARDINES DEL EMBAJADOR" },
    { id: 139, sector: "JARDINES DEL SUR" },
    { id: 140, sector: "JOSÉ CONTRERAS" },
    { id: 141, sector: "JOSE OSCAR" },
    { id: 142, sector: "JULIETA MORALES" },
    { id: 143, sector: "KENNEDY" },
    { id: 144, sector: "KM 10 1/2" },
    { id: 145, sector: "KM 7 1/2" },
    { id: 146, sector: "KM 8" },
    { id: 147, sector: "KM 8 1/2" },
    { id: 148, sector: "LA AGUSTINA" },
    { id: 149, sector: "LA AGUSTINITA" },
    { id: 150, sector: "LA ALDABA" },
    { id: 151, sector: "LA ATARAZANA" },
    { id: 152, sector: "LA CUARENTA" },
    { id: 153, sector: "LA FÉ" },
    { id: 154, sector: "LA CASTELLANA" },
    { id: 155, sector: "LA CEIBA" },
    { id: 156, sector: "LA CEMENTERA" },
    { id: 157, sector: "LA CIENEGA" },
    { id: 158, sector: "LA ESPERANZA" },
    { id: 159, sector: "LA ESPERILLA" },
    { id: 160, sector: "LA FERIA" },
    { id: 161, sector: "LA FERIA 1" },
    { id: 162, sector: "LA FUENTE" },
    { id: 163, sector: "LA GOYA" },
    { id: 164, sector: "LA ISABELA" },
    { id: 165, sector: "LA JAVILLA" },
    { id: 166, sector: "LA JULIA" },
    { id: 167, sector: "LA LOTERÍA" },
    { id: 168, sector: "LA MESETA" },
    { id: 169, sector: "LA PAZ" },
    { id: 170, sector: "LA PUYA" },
    { id: 171, sector: "LA YAGÜITA" },
    { id: 172, sector: "LA YUCA" },
    { id: 173, sector: "LA ZURZA" },
    { id: 174, sector: "LA ZURZA (JUAN PABLO DUARTE)" },
    { id: 175, sector: "LADERAS DE ARROYO HONDO" },
    { id: 176, sector: "LANHA GAUTIER" },
    { id: 177, sector: "LAS AURORAS" },
    { id: 178, sector: "LAS CAÑITAS" },
    { id: 179, sector: "LAS FLORES" },
    { id: 180, sector: "LAS ACACIAS" },
    { id: 181, sector: "LAS COLINAS" },
    { id: 182, sector: "LAS LAURAS I" },
    { id: 183, sector: "LAS MARÍAS" },
    { id: 184, sector: "LAS PALMERAS" },
    { id: 185, sector: "LAS PRADERAS" },
    { id: 186, sector: "LAS VILLAS" },
    { id: 187, sector: "LAURAS II" },
    { id: 188, sector: "LOMAS DE ARROYO HONDO" },
    { id: 189, sector: "LOS ARROYOS" },
    { id: 190, sector: "LOS ANGELES" },
    { id: 191, sector: "LOS CACICAZGOS" },
    { id: 192, sector: "LOS CAMINOS" },
    { id: 193, sector: "LOS CERROS DE ARROYO HONDO" },
    { id: 194, sector: "LOS COQUITOS" },
    { id: 195, sector: "LOS GIRASOLES" },
    { id: 196, sector: "LOS GUAYABOS" },
    { id: 197, sector: "LOS JARDINES" },
    { id: 198, sector: "LOS MAESTROS" },
    { id: 199, sector: "LOS MILLONES" },
    { id: 200, sector: "LOS PERALEJOS" },
    { id: 201, sector: "LOS PINOS" },
    { id: 202, sector: "LOS PRADITOS" },
    { id: 203, sector: "LOS PRADOS" },
    { id: 204, sector: "LOS RESTAURADORES" },
    { id: 205, sector: "LOS RIOS" },
    { id: 206, sector: "LOTERÍA" },
    { id: 207, sector: "LUZ CONSUELO" },
    { id: 208, sector: "MANGANAGUA" },
    { id: 209, sector: "MANRESA A" },
    { id: 210, sector: "MANZANO" },
    { id: 211, sector: "MAR AZUL" },
    { id: 212, sector: "MARIA AUXILIADORA" },
    { id: 213, sector: "MARIA JOSEFINA" },
    { id: 214, sector: "MARY PILY (HONDURAS)" },
    { id: 215, sector: "MATA HAMBRE" },
    { id: 216, sector: "MEJORAMIENTO SOCIAL" },
    { id: 217, sector: "MILLONCITO" },
    { id: 218, sector: "MIRADOR SUR" },
    { id: 219, sector: "MIRADOR DE LOS GIRASOLES" },
    { id: 220, sector: "MIRADOR NORTE" },
    { id: 221, sector: "MIRAFLORES" },
    { id: 222, sector: "MIRAMAR" },
    { id: 223, sector: "NACO" },
    { id: 224, sector: "NORDESA 1" },
    { id: 225, sector: "NORDESA III" },
    { id: 226, sector: "PALMA REAL" },
    { id: 227, sector: "PANTOJA" },
    { id: 228, sector: "PASEO DEL ARROYO" },
    { id: 229, sector: "PASEO DEL RIO" },
    { id: 230, sector: "PASEO YAQUITO" },
    { id: 231, sector: "PEDREGAL" },
    { id: 232, sector: "PERALEJOS" },
    { id: 233, sector: "PERANTUEN" },
    { id: 234, sector: "PORTAL" },
    { id: 235, sector: "PRADERA HERMOSA" },
    { id: 236, sector: "PRADERA VERDE" },
    { id: 237, sector: "PRADERAS I" },
    { id: 238, sector: "PRADERAS III" },
    { id: 239, sector: "PRADERAS IV" },
    { id: 240, sector: "PRIMAVERA" },
    { id: 241, sector: "PROCERES" },
    { id: 242, sector: "PUERTA DE HIERRO" },
    { id: 243, sector: "PUERTO ISABELA" },
    { id: 244, sector: "QUINTAS DE CUESTA HERMOSA" },
    { id: 245, sector: "REAL" },
    { id: 246, sector: "RENACIMIENTO" },
    { id: 247, sector: "REPARTO AGUEDITA" },
    { id: 248, sector: "Res. Aurora" },
    { id: 249, sector: "RES. BUENOS AIRES" },
    { id: 250, sector: "RES. CARMEN MARIA II" },
    { id: 251, sector: "Res. Marien" },
    { id: 252, sector: "RESIDENCIAL KG" },
    { id: 253, sector: "REUTILIZAR" },
    { id: 254, sector: "ROCA DEL MAR" },
    { id: 255, sector: "ROCA MAR" },
    { id: 256, sector: "ROSMIL 1" },
    { id: 257, sector: "SAN ANTÓN" },
    { id: 258, sector: "SAN ANTONIO" },
    { id: 259, sector: "SAN CARLOS" },
    { id: 260, sector: "SAN GABRIEL" },
    { id: 261, sector: "SAN GERÓNIMO" },
    { id: 262, sector: "SAN JOSÉ" },
    { id: 263, sector: "SAN LAZARO" },
    { id: 264, sector: "SAN MARTÍN DE PORRES" },
    { id: 265, sector: "SAN MIGUEL" },
    { id: 266, sector: "SAN PABLO" },
    { id: 267, sector: "SAN SEBASTIAN" },
    { id: 268, sector: "SANDRA I" },
    { id: 269, sector: "SANDRA 2" },
    { id: 270, sector: "SEMINARIO" },
    { id: 271, sector: "SERRALLES" },
    { id: 272, sector: "SIMÓN BOLIVAR" },
    { id: 273, sector: "SOLIMAR" },
    { id: 274, sector: "TROPICAL" },
    { id: 275, sector: "TRUEVA" },
    { id: 276, sector: "URB. FERNANDEZ" },
    { id: 277, sector: "VELAZCASA" },
    { id: 278, sector: "VILLA AMANDA" },
    { id: 279, sector: "VILLA CLAUDIA" },
    { id: 280, sector: "VILLA CONSUELO" },
    { id: 281, sector: "VILLA ELENA" },
    { id: 282, sector: "VILLA FONTANA" },
    { id: 283, sector: "VILLA FRANCISCA" },
    { id: 284, sector: "VILLA JUANA" },
    { id: 285, sector: "VILLA LILA" },
    { id: 286, sector: "VILLA MARÍA" },
    { id: 287, sector: "VILLA MARINA" },
    { id: 288, sector: "VILLA PALMERA" },
    { id: 289, sector: "VILLA GRACIELA" },
    { id: 290, sector: "VILLAS AGRICOLAS" },
    { id: 291, sector: "VILLAS FAIRBANK" },
    { id: 292, sector: "ZONA COLONIAL" },
    { id: 293, sector: "ZONA UNIVERSITARIA" }
]



// Supongo que `sectores` y `obtenerCoordenadas` están definidos en otra parte de tu código
// async function obtenerCoordenadas(sector) { ... }
// const sectores = [ ... ];

async function buscarCoordenadas() {
    const sectoresCoordenadas = [];
    
    for (let i = 0; i < sectores.length; i++) {
        const sector = sectores[i];
        console.log(sector.sector);
        
        const respuesta = await obtenerCoordenadas(sector.sector, i);
        sectoresCoordenadas.push(respuesta);
    }

    // Convierte el arreglo a un formato legible en JavaScript
    const formattedData = sectoresCoordenadas
        .map(obj => {
            const properties = Object.entries(obj)
                .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
                .join(', ');
            return `{ ${properties} }`;
        })
        .join(',\n  ');

    const content = `const data = [\n  ${formattedData}\n];\n\nmodule.exports = data;`;

    // Escribe el archivo
    fs.writeFile('data.js', content, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido guardado.');
    });
}


async function obtenerCoordenadas(sector, index) {

    const busqueda = `${sector}, DISTRITO NACIONAL,REPÚBLICA DOMINICANA`;

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(busqueda)}&format=json`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    
    if (datos.length > 0) {
        const location = datos[0];
        return {
        id: index,
        sector,
        lat: location.lat,
        lng: location.lon
        };
    } else {
        return {
            id: index,
            sector,
        lat: 0,
        lng: 0
        };
    }
}

buscarCoordenadas()

