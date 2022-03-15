using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Suscripcion")]
public class SuscripcionEntity
{

    public int Id_usuario { get; set; }
    
    [MaxLength(50)]
    public string Nombre { get; set; }

    [MaxLength(50)]
    public string Categoria { get; set; }

    public string Imagen { get; set; }

    public DateTime FechaVencimiento { get; set; }

    public double Precio { get; set; }

    public int Id { get; set; }

}
