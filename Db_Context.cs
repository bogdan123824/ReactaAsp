using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace JWTTest
{
    public class Db_Context: IdentityDbContext<IdentityUser>
    {
        public Db_Context(DbContextOptions<Db_Context> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder) { base.OnModelCreating(builder); }
    }
}
