using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TheCallCenter.Data.Entities;

namespace TheCallCenter.Data
{
    public class CallCenterContext : DbContext
    {
        private readonly IConfiguration _config;

        public CallCenterContext(IConfiguration config)
        {
            _config = config;
        }

        public DbSet<Call> Calls { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder bldr)
        {
            bldr.UseSqlServer(_config.GetConnectionString("CallCenterConnectionString"));
        }
    }
}
