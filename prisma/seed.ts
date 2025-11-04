// prisma/seed.cjs
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Inserindo dados reais...');

  await prisma.receita.createMany({
    data: [
      { descricao: 'Salário Buffet 1,2 e Já', valor: 2100 },
      { descricao: 'Comissões médias mensais', valor: 6000 },
    ],
  });

  await prisma.despesa.createMany({
    data: [
      { descricao: 'Aluguel', valor: 1100, dataVencimento: new Date('2025-11-10') },
      { descricao: 'Conta de Luz', valor: 220, dataVencimento: new Date('2025-11-05') },
      { descricao: 'Conta de Água', valor: 140, dataVencimento: new Date('2025-11-08') },
      { descricao: 'Internet + Celular', valor: 240, dataVencimento: new Date('2025-11-12') },
    ],
  });

  await prisma.emprestimo.createMany({
    data: [
      { credor: 'Cida', valorParcela: 162.77, parcelasTotais: 12, parcelasPagas: 3 },
      { credor: 'BMG', valorParcela: 250, parcelasTotais: 36, parcelasPagas: 18 },
    ],
  });

  console.log('✅ Dados inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
