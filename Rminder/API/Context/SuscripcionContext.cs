using System.Data.Entity;

public class SuscripcionContext : DbContext
{
    public SuscripcionContext(string connectionString) : base(connectionString)
    { }
    public DbSet<SuscripcionEntity> Suscripcions { get; set; }
    public DbSet<UserEntity> Users { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
