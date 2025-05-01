import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  src: string;
  name?: string;
}

interface AvatarGroupProps {
  users: User[];
  count: number;
  max?: number;
}

export function AvatarGroup({ users, count, max = 3 }: AvatarGroupProps) {
  const displayUsers = users.slice(0, max);
  const remainingCount = users.length - max;
  const formattedCount = count >= 1000 ? `${Math.floor(count / 1000)}K` : count.toString();
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {displayUsers.map((user, i) => (
          <Avatar key={i} className="w-9 h-9 border-2 border-white">
            <AvatarImage src={user.src} alt={user.name || `User ${i + 1}`} />
            <AvatarFallback>{user.name?.[0] || "U"}</AvatarFallback>
          </Avatar>
        ))}
        {remainingCount > 0 && (
          <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center text-xs font-medium border-2 border-white">
            +
          </div>
        )}
      </div>
      <div className="font-poppins ml-2">
        <span className="text-2xl font-bold">{formattedCount}</span>
        <span className="text-sm text-slate-600 ml-2">Community Members</span>
      </div>
    </div>
  );
}
