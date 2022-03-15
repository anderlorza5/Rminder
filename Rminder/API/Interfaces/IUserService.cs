using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

/// <summary>
/// This is the service for Users
/// </summary>
public interface IUserService
{
    public IEnumerable<UserDTO> GetAll();

    public UserDTO GetByID(int guid);

    public UserDTO Add(BaseUserDTO guid);

    public void Delete(int guid);

    public UserDTO Modify(BaseUserDTO User, int guid);
}