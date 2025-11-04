// C:\Projetos\Rafael50\prisma\seed.cjs
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('⏳ Inserindo dados reais...')

  await prisma.receita.deleteMany()
  await prisma.despesa.deleteMany()
  await prisma.emprestimo.deleteMany()

  await prisma.receita.createMany({
    data: [
      { descricao: 'Salário CLT fixo (Rafael)', valor: 2100.00 },
      { descricao: 'Renda Tatiana (Yukai)', valor: 1400.00 },
    ],
  })

  await prisma.despesa.createMany({
    data: [
      { descricao: 'Aluguel', valor: 1591.00, dataVencimento: new Date() },
      { descricao: 'IPTU', valor: 467.00, dataVencimento: new Date() },
      { descricao: 'Luz', valor: 250.00, dataVencimento: new Date() },
      { descricao: 'Condomínio', valor: 467.00, dataVencimento: new Date() },
      { descricao: 'Alimentação', valor: 1000.00, dataVencimento: new Date() },
    ],
  })

  await prisma.emprestimo.createMany({
    data: [
      { credor: 'Cida 1', valorParcela: 162.77, jurosMensal: 0.0, ativo: true },
      { credor: 'Cida 2', valorParcela: 250.00, jurosMensal: 0.0, ativo: true },
      { credor: 'Cida 3', valorParcela: 600.00, jurosMensal: 0.0, ativo: true },
      { credor: 'Bruninho', valorParcela: 1000.00, jurosMensal: 0.0, ativo: true },
      { credor: 'Maria (juros 5%)', valorParcela: 250.00, jurosMensal: 5.0, ativo: true },
    ],
  })

  console.log('✅ Seed concluído com sucesso!')
}

main()
  .catch((e) => { console.error('❌ Erro no seed:', e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
