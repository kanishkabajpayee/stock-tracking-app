import inngest from "@/lib/inngest/client";
import { sendWelcomeEmail } from "@/emails/sendWelcomeEmail";
interface User
{
    name: string;
    email: string;
    country: string;
    goals:string
}
export const sendSignup = inngest.createFunction(

    {id: 'sign-up-email'},
    {event:"app/user.created"},
    async ({event , step}) => 
        {
            const userProfile = `
            - Country: ${event.data.country}
            - Investment goals: ${event.data.investmentGoals}
            - Risk tolerance: ${event.data.riskTolerance}
            - Preferred industry: ${event.data.preferredIndustry}
        `

            await step.run("send-welcome-email", async () => {
                const { data: { email, name } } = event;
                await sendWelcomeEmail({email, name});
            });
            return { success: true, message: `Email sent ` };
        }
        
    
)
