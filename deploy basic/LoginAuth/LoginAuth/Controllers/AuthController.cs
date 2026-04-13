using LoginAuth.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LoginAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private static readonly string HardcodedUsername = "admin";
        private static readonly string HardcodedPassword = "password123";

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto request)
        {
            if (request.Username == HardcodedUsername && request.Password == HardcodedPassword)
            {
                return Ok(new { success = true });
            }
            return Unauthorized(new { success = false, message = "Invalid credentials" });
        }
    }

    
}

