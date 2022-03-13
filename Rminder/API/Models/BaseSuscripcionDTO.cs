/// <summary>
/// Base DTO of the Suscripcion, used in creation
/// </summary>
public class BaseSuscripcionDTO
{

    public int Id_usuario { get; set; }
    public string Nombre { get; set; }
    public string Categoria { get; set; }
    public string Imagen { get; set; }
    public DateTime FechaVencimiento { get; set; }
    public double Precio { get; set; }

}