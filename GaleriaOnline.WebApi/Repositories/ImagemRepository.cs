using GaleriaOnline.WebApi.DbContextImagem;
using GaleriaOnline.WebApi.Interfaces;
using GaleriaOnline.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GaleriaOnline.WebApi.Repositories
{
    // Repositório da entidade Imagem
    public class ImagemRepository : IImagemRepository
    {
        private readonly GaleriaOnlineDbContext _context; // Conexão com o banco

        // Construtor
        public ImagemRepository(GaleriaOnlineDbContext context)
        {
            _context = context;
        }

        // Buscar todas as imagens
        public async Task<IEnumerable<Imagem>> GetAllAsync()
        {
            return await _context.Imagens.ToListAsync();
        }

        // Criar nova imagem
        public async Task<Imagem?> CreateAsync(Imagem imagem)
        {
            _context.Imagens.Add(imagem);
            await _context.SaveChangesAsync(); // Salvar no banco
            return imagem;
        }

        // Deletar imagem pelo id
        public async Task<bool> DeleteAsync(int id)
        {
            var imagem = await _context.Imagens.FindAsync(id);
            if (imagem == null)
            {
                return false; // Não achou
            }

            _context.Imagens.Remove(imagem);
            return await _context.SaveChangesAsync() > 0; // true se removeu
        }

        // Buscar imagem pelo id
        public async Task<Imagem?> GetByIdAsync(int id)
        {
            return await _context.Imagens.FindAsync(id);
        }

        // Atualizar imagem existente
        public async Task<bool> UpdateAsync(Imagem imagem)
        {
            _context.Imagens.Update(imagem);
            return await _context.SaveChangesAsync() > 0; // true se atualizou
        }
    }
}
