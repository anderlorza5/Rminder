using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class UserService : IUserService
{
    private readonly SuscripcionContext _context;
    private readonly IMapper _mapper;

    public UserService(SuscripcionContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public UserDTO Add(BaseUserDTO baseUser)
    {
        var _mappedUser = _mapper.Map<UserEntity>(baseUser);
        var entityAdded = _context.Users.Add(_mappedUser);
        _context.SaveChanges();
        return _mapper.Map<UserDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        UserEntity User = _context.Users.FirstOrDefault(x => x.Id == guid);

        if (User == null)
            throw new ApplicationException($"Bokk with id {guid} not found");

        _context.Users.Remove(User);
        _context.SaveChanges();
    }

    public IEnumerable<UserDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<UserDTO>>(_context.Users.Select(x => x));
    }

    public UserDTO GetByID(int guid)
    {
        return _mapper.Map<UserDTO>(_context.Users.FirstOrDefault(x => x.Id == guid));
    }

    public UserDTO Modify(BaseUserDTO User, int guid)
    {
        var _mappedUser = _mapper.Map<UserEntity>(User);
        _mappedUser.Id = guid;

        UserEntity modifiedUser = _context.Users.FirstOrDefault(x => x.Id == guid);

        if (modifiedUser == null)
            return null;

        _context.Entry(modifiedUser).CurrentValues.SetValues(_mappedUser);

        _context.SaveChanges();

        return _mapper.Map<UserDTO>(_mappedUser);
    }

}