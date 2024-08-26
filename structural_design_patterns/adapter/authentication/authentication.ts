// Target Interface
interface AuthService {
  login(username: string, password: string): Promise<boolean>;
  logout(): void;
  isAuthenticated(): boolean;
}


// Implement Authentication With OAuth
export class ThirdPartyAuth {
  async signIn(email: string, password: string): Promise<{ token: string }> {
    // Simulate a login process and return a token
    if (email === "user@example.com" && password === "password") {
      return { token: "123456789" };
    } else {
      throw new Error("Invalid credentials");
    }
  }

  signOut(): void {
    console.log("User signed out");
  }

  getSessionToken(): string | null {
    // Simulate getting a session token
    return "123456789"; // In a real scenario, this might return null if not authenticated
  }
}




export class AuthAdapter implements AuthService {
  private thirdPartyAuth: ThirdPartyAuth;
  private token: string | null = null;

  constructor(thirdPartyAuth: ThirdPartyAuth) {
    this.thirdPartyAuth = thirdPartyAuth;
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      const response = await this.thirdPartyAuth.signIn(username, password);
      this.token = response.token;
      return true;
    } catch (error) {
      console.error("Login failed:", error.message);
      return false;
    }
  }

  logout(): void {
    this.thirdPartyAuth.signOut();
    this.token = null;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }
}


// Client Code 
async function runAuthenticationFlow(authService: AuthService) {
  const loginSuccess = await authService.login("user@example.com", "password");
  if (loginSuccess) {
    console.log("User is authenticated:", authService.isAuthenticated());

    // Perform some actions...

    authService.logout();
    console.log("User is authenticated after logout:", authService.isAuthenticated());
  } else {
    console.log("Login failed");
  }
}

const thirdPartyAuth = new ThirdPartyAuth();

const authAdapter = new AuthAdapter(thirdPartyAuth);

runAuthenticationFlow(authAdapter);

