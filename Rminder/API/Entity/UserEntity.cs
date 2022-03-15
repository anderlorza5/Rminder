using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Usuario")]
public class UserEntity
{

    [MaxLength(50)]
    public string Nombre { get; set; }
    [MaxLength(50)]
    public string Contrasenia { get; set; }

    public int Id { get; set; }

}
