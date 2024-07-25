const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const colaboradores = require("../../docs/colaboradores.json");
const oss = require("../../oss.json");
const comentarios = require("../../comentarios.json");

async function main(){
    for (const colaborador of colaboradores) {
        await prisma.colaborador.create({
            data: colaborador
        });
    }
    for (const os of oss) {
        await prisma.os.create({
            data: os
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log('Seed complete');
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        ProcessingInstruction.exit(1)
    }
    )