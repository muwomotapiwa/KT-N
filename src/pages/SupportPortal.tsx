import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Ticket, Plus, Search, Filter, Clock, CheckCircle, AlertCircle, 
  XCircle, MessageSquare, User, Mail, Lock, Eye, EyeOff, LogOut,
  ChevronRight, Calendar, Tag, Send, Shield, Loader2, Bell,
  Home, ArrowLeft, Settings, Users, Paperclip, Image, X, Download, ZoomIn
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Types
interface Attachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string; // base64 data URL for demo
}

interface Message {
  id: string;
  sender: 'user' | 'admin';
  senderName: string;
  content: string;
  timestamp: Date;
  attachments?: Attachment[];
}

interface TicketType {
  id: string;
  ticketNumber: string;
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  messages: Message[];
  adminNote?: string;
  attachments?: Attachment[];
}

interface UserType {
  id: string;
  email: string;
  name: string;
  company: string;
  role: 'user' | 'admin';
}

// Max file size: 20MB
const MAX_FILE_SIZE = 20 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];

// Dummy Users
const dummyUsers: (UserType & { password: string })[] = [
  { id: 'admin-1', email: 'admin@kypextech.co.za', password: 'admin123', name: 'Kypex Admin', company: 'Kypex-Tech Solutions', role: 'admin' },
  { id: 'user-1', email: 'john@acmecorp.com', password: 'client123', name: 'John Smith', company: 'Acme Corporation', role: 'user' },
  { id: 'user-2', email: 'sarah@techstart.io', password: 'client123', name: 'Sarah Johnson', company: 'TechStart Inc', role: 'user' },
  { id: 'user-3', email: 'mike@retailpro.com', password: 'client123', name: 'Mike Williams', company: 'RetailPro Ltd', role: 'user' },
];

// Demo attachment for existing tickets
const demoAttachment: Attachment = {
  id: 'att-demo-1',
  name: 'error-screenshot.png',
  size: 245000,
  type: 'image/png',
  url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDExZjQ0Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIHJ4PSI4IiBmaWxsPSIjMTg0NDcwIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjYiIGZpbGw9IiNmZjVmNTYiLz4KPGNpcmNsZSBjeD0iNjAiIGN5PSI0MCIgcj0iNiIgZmlsbD0iI2ZmYmQyZSIvPgo8Y2lyY2xlIGN4PSI4MCIgY3k9IjQwIiByPSI2IiBmaWxsPSIjMjdkOWI5Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmaWxsPSIjMzRkOWI5IiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIj5FcnJvciBTY3JlZW5zaG90PC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjE4MCIgZmlsbD0iIzg5YThjMCIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSI+RGVtbyBBdHRhY2htZW50IFByZXZpZXc8L3RleHQ+Cjwvc3ZnPg=='
};

// Dummy Tickets
const initialTickets: TicketType[] = [
  {
    id: 'ticket-1',
    ticketNumber: 'KT-2024-001',
    subject: 'Website loading slowly on mobile devices',
    description: 'Our e-commerce website is taking over 10 seconds to load on mobile devices. This is affecting our conversion rates significantly.',
    status: 'in-progress',
    priority: 'high',
    category: 'Website Development',
    createdAt: new Date('2024-01-15T10:30:00'),
    updatedAt: new Date('2024-01-16T14:20:00'),
    userId: 'user-1',
    attachments: [demoAttachment],
    messages: [
      { id: 'm1', sender: 'user', senderName: 'John Smith', content: 'The issue seems to be worse during peak hours. I\'ve attached a screenshot of the loading time.', timestamp: new Date('2024-01-15T11:00:00'), attachments: [demoAttachment] },
      { id: 'm2', sender: 'admin', senderName: 'Kypex Support', content: 'We have identified the issue - it\'s related to unoptimized images. We\'re implementing lazy loading and image compression now.', timestamp: new Date('2024-01-16T14:20:00') },
    ],
    adminNote: 'Optimization in progress. ETA: 2 days.'
  },
  {
    id: 'ticket-2',
    ticketNumber: 'KT-2024-002',
    subject: 'Need to add new payment gateway',
    description: 'We need to integrate Stripe payment gateway alongside our existing PayFast integration for international customers.',
    status: 'open',
    priority: 'medium',
    category: 'Website Development',
    createdAt: new Date('2024-01-18T09:15:00'),
    updatedAt: new Date('2024-01-18T09:15:00'),
    userId: 'user-1',
    messages: [],
  },
  {
    id: 'ticket-3',
    ticketNumber: 'KT-2024-003',
    subject: 'Mobile app crashing on Android 14',
    description: 'After the latest Android 14 update, our mobile app crashes when users try to access the dashboard. Affects approximately 30% of our Android users.',
    status: 'in-progress',
    priority: 'critical',
    category: 'Mobile App Development',
    createdAt: new Date('2024-01-17T16:45:00'),
    updatedAt: new Date('2024-01-18T10:30:00'),
    userId: 'user-2',
    messages: [
      { id: 'm3', sender: 'admin', senderName: 'Kypex Support', content: 'We have replicated the issue. Our team is working on a hotfix. Will push an update within 24 hours.', timestamp: new Date('2024-01-18T10:30:00') },
    ],
    adminNote: 'Critical bug - prioritizing hotfix deployment.'
  },
  {
    id: 'ticket-4',
    ticketNumber: 'KT-2024-004',
    subject: 'Security audit report request',
    description: 'We need the latest security audit report for our annual compliance review. Please provide the penetration testing results.',
    status: 'resolved',
    priority: 'medium',
    category: 'Cybersecurity',
    createdAt: new Date('2024-01-10T11:20:00'),
    updatedAt: new Date('2024-01-14T09:00:00'),
    userId: 'user-2',
    messages: [
      { id: 'm4', sender: 'admin', senderName: 'Kypex Support', content: 'The security audit report has been emailed to your registered address. Please confirm receipt.', timestamp: new Date('2024-01-14T09:00:00') },
      { id: 'm5', sender: 'user', senderName: 'Sarah Johnson', content: 'Received, thank you!', timestamp: new Date('2024-01-14T09:30:00') },
    ],
  },
  {
    id: 'ticket-5',
    ticketNumber: 'KT-2024-005',
    subject: 'Cloud migration progress update',
    description: 'Requesting an update on the AWS migration project. We need to inform our stakeholders about the timeline.',
    status: 'closed',
    priority: 'low',
    category: 'Cloud Services',
    createdAt: new Date('2024-01-05T08:00:00'),
    updatedAt: new Date('2024-01-12T17:00:00'),
    userId: 'user-3',
    messages: [
      { id: 'm6', sender: 'admin', senderName: 'Kypex Support', content: 'Migration is 85% complete. Database migration finished, now moving application servers. ETA: Jan 20.', timestamp: new Date('2024-01-08T14:00:00') },
      { id: 'm7', sender: 'user', senderName: 'Mike Williams', content: 'Great progress! Thanks for the update.', timestamp: new Date('2024-01-08T15:30:00') },
      { id: 'm8', sender: 'admin', senderName: 'Kypex Support', content: 'Migration completed successfully ahead of schedule. All systems are now running on AWS.', timestamp: new Date('2024-01-12T17:00:00') },
    ],
  },
  {
    id: 'ticket-6',
    ticketNumber: 'KT-2024-006',
    subject: 'Data analytics dashboard not updating',
    description: 'The real-time analytics dashboard stopped updating since yesterday. The data seems to be stuck at Jan 17.',
    status: 'open',
    priority: 'high',
    category: 'Data Analytics',
    createdAt: new Date('2024-01-19T07:30:00'),
    updatedAt: new Date('2024-01-19T07:30:00'),
    userId: 'user-3',
    messages: [],
    adminNote: 'Checking data pipeline connections.'
  },
];

// Status and Priority configs
const statusConfig = {
  'open': { label: 'Open', color: 'bg-blue-500', icon: AlertCircle, textColor: 'text-blue-400' },
  'in-progress': { label: 'In Progress', color: 'bg-yellow-500', icon: Clock, textColor: 'text-yellow-400' },
  'resolved': { label: 'Resolved', color: 'bg-green-500', icon: CheckCircle, textColor: 'text-green-400' },
  'closed': { label: 'Closed', color: 'bg-gray-500', icon: XCircle, textColor: 'text-gray-400' },
};

const priorityConfig = {
  'low': { label: 'Low', color: 'bg-gray-500', textColor: 'text-gray-400' },
  'medium': { label: 'Medium', color: 'bg-blue-500', textColor: 'text-blue-400' },
  'high': { label: 'High', color: 'bg-orange-500', textColor: 'text-orange-400' },
  'critical': { label: 'Critical', color: 'bg-red-500', textColor: 'text-red-400' },
};

const categories = [
  'Website Development',
  'Mobile App Development',
  'Cybersecurity',
  'Cloud Services',
  'IT Consulting',
  'Data Analytics',
  'AI Solutions',
  'General Inquiry',
];

export default function SupportPortal() {
  // State
  const [user, setUser] = useState<UserType | null>(null);
  const [tickets, setTickets] = useState<TicketType[]>(initialTickets);
  const [view, setView] = useState<'list' | 'detail' | 'create'>('list');
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [, setShowFilters] = useState(false);
  
  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // Create ticket state
  const [newTicket, setNewTicket] = useState({
    subject: '',
    description: '',
    category: '',
    priority: 'medium' as 'low' | 'medium' | 'high' | 'critical',
  });
  const [ticketAttachments, setTicketAttachments] = useState<Attachment[]>([]);
  
  // Message state
  const [newMessage, setNewMessage] = useState('');
  const [messageAttachments, setMessageAttachments] = useState<Attachment[]>([]);
  
  // Admin state
  const [adminNote, setAdminNote] = useState('');
  
  // File input refs
  const ticketFileInputRef = useRef<HTMLInputElement>(null);
  const messageFileInputRef = useRef<HTMLInputElement>(null);
  
  // Image preview modal
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // File upload error
  const [uploadError, setUploadError] = useState<string>('');

  // Check for stored session
  useEffect(() => {
    const storedUser = localStorage.getItem('kypex_support_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  // Handle file selection
  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    setAttachments: React.Dispatch<React.SetStateAction<Attachment[]>>
  ) => {
    const files = e.target.files;
    if (!files) return;
    
    setUploadError('');
    
    Array.from(files).forEach(file => {
      // Check file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        setUploadError(`Invalid file type: ${file.name}. Only images are allowed.`);
        return;
      }
      
      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        setUploadError(`File too large: ${file.name}. Maximum size is 20MB.`);
        return;
      }
      
      // Read file as base64
      const reader = new FileReader();
      reader.onload = (event) => {
        const attachment: Attachment = {
          id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: file.name,
          size: file.size,
          type: file.type,
          url: event.target?.result as string,
        };
        setAttachments(prev => [...prev, attachment]);
      };
      reader.readAsDataURL(file);
    });
    
    // Reset input
    e.target.value = '';
  };

  // Remove attachment
  const removeAttachment = (
    attachmentId: string,
    setAttachments: React.Dispatch<React.SetStateAction<Attachment[]>>
  ) => {
    setAttachments(prev => prev.filter(a => a.id !== attachmentId));
  };

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = dummyUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('kypex_support_user', JSON.stringify(userWithoutPassword));
    } else {
      setLoginError('Invalid email or password');
    }
    setIsLoggingIn(false);
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('kypex_support_user');
    setView('list');
    setSelectedTicket(null);
  };

  // Get filtered tickets
  const getFilteredTickets = () => {
    let filtered = tickets;
    
    // Filter by user (unless admin)
    if (user?.role !== 'admin') {
      filtered = filtered.filter(t => t.userId === user?.id);
    }
    
    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(t => t.status === statusFilter);
    }
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(t => 
        t.subject.toLowerCase().includes(query) ||
        t.ticketNumber.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query)
      );
    }
    
    return filtered.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  };

  // Create ticket handler
  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketNum = `KT-2024-${String(tickets.length + 1).padStart(3, '0')}`;
    const ticket: TicketType = {
      id: `ticket-${Date.now()}`,
      ticketNumber: ticketNum,
      subject: newTicket.subject,
      description: newTicket.description,
      status: 'open',
      priority: newTicket.priority,
      category: newTicket.category,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: user!.id,
      messages: [],
      attachments: ticketAttachments.length > 0 ? ticketAttachments : undefined,
    };
    setTickets([ticket, ...tickets]);
    setNewTicket({ subject: '', description: '', category: '', priority: 'medium' });
    setTicketAttachments([]);
    setView('list');
  };

  // Send message handler
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!newMessage.trim() && messageAttachments.length === 0) || !selectedTicket) return;
    
    const message: Message = {
      id: `msg-${Date.now()}`,
      sender: user?.role === 'admin' ? 'admin' : 'user',
      senderName: user?.role === 'admin' ? 'Kypex Support' : user!.name,
      content: newMessage,
      timestamp: new Date(),
      attachments: messageAttachments.length > 0 ? messageAttachments : undefined,
    };
    
    const updatedTickets = tickets.map(t => {
      if (t.id === selectedTicket.id) {
        return {
          ...t,
          messages: [...t.messages, message],
          updatedAt: new Date(),
        };
      }
      return t;
    });
    
    setTickets(updatedTickets);
    setSelectedTicket({
      ...selectedTicket,
      messages: [...selectedTicket.messages, message],
      updatedAt: new Date(),
    });
    setNewMessage('');
    setMessageAttachments([]);
  };

  // Admin: Update status
  const handleUpdateStatus = (ticketId: string, status: TicketType['status']) => {
    const updatedTickets = tickets.map(t => {
      if (t.id === ticketId) {
        return { ...t, status, updatedAt: new Date() };
      }
      return t;
    });
    setTickets(updatedTickets);
    if (selectedTicket?.id === ticketId) {
      setSelectedTicket({ ...selectedTicket, status, updatedAt: new Date() });
    }
  };

  // Admin: Save note
  const handleSaveAdminNote = (ticketId: string) => {
    const updatedTickets = tickets.map(t => {
      if (t.id === ticketId) {
        return { ...t, adminNote, updatedAt: new Date() };
      }
      return t;
    });
    setTickets(updatedTickets);
    if (selectedTicket?.id === ticketId) {
      setSelectedTicket({ ...selectedTicket, adminNote, updatedAt: new Date() });
    }
  };

  // Get user by ID (for admin view)
  const getUserById = (userId: string) => {
    return dummyUsers.find(u => u.id === userId);
  };

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Attachment Preview Component
  const AttachmentPreview = ({ attachment, onRemove }: { attachment: Attachment; onRemove?: () => void }) => (
    <div className="relative group bg-navy rounded-lg overflow-hidden border border-primary/20">
      <img 
        src={attachment.url} 
        alt={attachment.name}
        className="w-20 h-20 object-cover cursor-pointer"
        onClick={() => setPreviewImage(attachment.url)}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
        <button
          type="button"
          onClick={() => setPreviewImage(attachment.url)}
          className="p-1.5 bg-primary/20 rounded-full text-primary hover:bg-primary/30 transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        {onRemove && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="p-1.5 bg-red-500/20 rounded-full text-red-400 hover:bg-red-500/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1">
        <p className="text-xs text-white truncate">{attachment.name}</p>
      </div>
    </div>
  );

  // Attachment List Component (for messages)
  const AttachmentList = ({ attachments }: { attachments: Attachment[] }) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {attachments.map(attachment => (
        <div key={attachment.id} className="relative group">
          <img 
            src={attachment.url} 
            alt={attachment.name}
            className="w-32 h-24 object-cover rounded-lg border border-primary/20 cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => setPreviewImage(attachment.url)}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
            <button
              onClick={() => setPreviewImage(attachment.url)}
              className="p-2 bg-primary/20 rounded-full text-primary hover:bg-primary/30 transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <a
              href={attachment.url}
              download={attachment.name}
              className="p-2 bg-primary/20 rounded-full text-primary hover:bg-primary/30 transition-colors"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  // Login Screen
  if (!user) {
    return (
      <div className="min-h-screen bg-navy relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(52,217,185,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,217,185,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Glowing orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            {/* Back to Home */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Login Card */}
            <div className="bg-navy-light/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <Shield className="w-8 h-8 text-navy" />
                </motion.div>
                <h1 className="text-2xl font-bold text-white font-display">Support Portal</h1>
                <p className="text-gray-400 mt-2">Sign in to manage your support tickets</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-navy border border-primary/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-3 bg-navy border border-primary/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {loginError && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {loginError}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-8 pt-6 border-t border-primary/10">
                <p className="text-gray-500 text-xs text-center mb-3">Demo Credentials</p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-navy/50 rounded-lg p-3">
                    <p className="text-primary font-medium mb-1">Admin</p>
                    <p className="text-gray-400">admin@kypextech.co.za</p>
                    <p className="text-gray-500">admin123</p>
                  </div>
                  <div className="bg-navy/50 rounded-lg p-3">
                    <p className="text-blue-400 font-medium mb-1">Client</p>
                    <p className="text-gray-400">john@acmecorp.com</p>
                    <p className="text-gray-500">client123</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Main Portal UI
  return (
    <div className="min-h-screen bg-navy">
      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={previewImage} 
                alt="Preview" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <a
                href={previewImage}
                download="attachment"
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Header */}
      <header className="bg-navy-light/80 backdrop-blur-lg border-b border-primary/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">K</span>
                </div>
                <span className="text-lg font-bold text-white font-display hidden sm:block">Support Portal</span>
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              {user.role === 'admin' && (
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                  Admin
                </span>
              )}
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.company}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-blue/20 rounded-full flex items-center justify-center border border-primary/30">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* Ticket List View */}
          {view === 'list' && (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Welcome & Stats */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                  Welcome back, {user.name.split(' ')[0]}!
                </h1>
                <p className="text-gray-400">
                  {user.role === 'admin' 
                    ? 'Manage all support tickets from your dashboard.' 
                    : 'View and manage your support tickets below.'}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Object.entries(statusConfig).map(([key, config]) => {
                  const count = getFilteredTickets().filter(t => t.status === key).length;
                  const Icon = config.icon;
                  return (
                    <motion.button
                      key={key}
                      onClick={() => setStatusFilter(statusFilter === key ? 'all' : key)}
                      className={`p-4 bg-navy-light/50 border rounded-xl text-left transition-all ${
                        statusFilter === key 
                          ? 'border-primary shadow-lg shadow-primary/20' 
                          : 'border-primary/10 hover:border-primary/30'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-5 h-5 ${config.textColor}`} />
                        <span className={`text-2xl font-bold ${config.textColor}`}>{count}</span>
                      </div>
                      <p className="text-sm text-gray-400">{config.label}</p>
                    </motion.button>
                  );
                })}
              </div>

              {/* Actions Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tickets..."
                    className="w-full pl-12 pr-4 py-3 bg-navy-light/50 border border-primary/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Filter Button (Mobile) */}
                <button
                  onClick={() => setShowFilters(prev => !prev)}
                  className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 bg-navy-light/50 border border-primary/20 rounded-xl text-gray-300"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                </button>

                {/* Create Ticket Button */}
                <motion.button
                  onClick={() => setView('create')}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="w-5 h-5" />
                  New Ticket
                </motion.button>
              </div>

              {/* Tickets List */}
              <div className="space-y-4">
                {getFilteredTickets().length === 0 ? (
                  <div className="text-center py-16">
                    <Ticket className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">No tickets found</h3>
                    <p className="text-gray-400 mb-6">
                      {searchQuery || statusFilter !== 'all' 
                        ? 'Try adjusting your filters'
                        : 'Create your first support ticket to get help'}
                    </p>
                    <button
                      onClick={() => setView('create')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl"
                    >
                      <Plus className="w-5 h-5" />
                      Create Ticket
                    </button>
                  </div>
                ) : (
                  getFilteredTickets().map((ticket, index) => {
                    const StatusIcon = statusConfig[ticket.status].icon;
                    const ticketUser = getUserById(ticket.userId);
                    return (
                      <motion.button
                        key={ticket.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          setSelectedTicket(ticket);
                          setAdminNote(ticket.adminNote || '');
                          setView('detail');
                        }}
                        className="w-full bg-navy-light/50 border border-primary/10 rounded-xl p-4 sm:p-6 text-left hover:border-primary/30 transition-all group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          {/* Ticket Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <span className="text-xs font-mono text-primary">{ticket.ticketNumber}</span>
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${statusConfig[ticket.status].color} text-white`}>
                                <StatusIcon className="w-3 h-3" />
                                {statusConfig[ticket.status].label}
                              </span>
                              <span className={`px-2 py-0.5 rounded-full text-xs ${priorityConfig[ticket.priority].color} text-white`}>
                                {priorityConfig[ticket.priority].label}
                              </span>
                              {ticket.attachments && ticket.attachments.length > 0 && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-primary/20 text-primary">
                                  <Paperclip className="w-3 h-3" />
                                  {ticket.attachments.length}
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1 truncate group-hover:text-primary transition-colors">
                              {ticket.subject}
                            </h3>
                            <p className="text-sm text-gray-400 line-clamp-1">{ticket.description}</p>
                            
                            {/* Admin: Show user info */}
                            {user.role === 'admin' && ticketUser && (
                              <div className="flex items-center gap-2 mt-2">
                                <Users className="w-4 h-4 text-gray-500" />
                                <span className="text-xs text-gray-500">{ticketUser.name} • {ticketUser.company}</span>
                              </div>
                            )}
                          </div>

                          {/* Meta */}
                          <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-xs">{formatDate(ticket.updatedAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Tag className="w-4 h-4" />
                              <span className="text-xs">{ticket.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4" />
                              <span className="text-xs">{ticket.messages.length} messages</span>
                            </div>
                          </div>

                          <ChevronRight className="hidden sm:block w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                        </div>

                        {/* Admin Note Preview */}
                        {ticket.adminNote && (
                          <div className="mt-4 pt-4 border-t border-primary/10">
                            <div className="flex items-center gap-2 text-xs text-yellow-400">
                              <Bell className="w-4 h-4" />
                              <span className="font-medium">Admin Note:</span>
                              <span className="text-gray-400">{ticket.adminNote}</span>
                            </div>
                          </div>
                        )}
                      </motion.button>
                    );
                  })
                )}
              </div>
            </motion.div>
          )}

          {/* Create Ticket View */}
          {view === 'create' && (
            <motion.div
              key="create"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Back Button */}
              <button
                onClick={() => setView('list')}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Tickets
              </button>

              <div className="max-w-2xl mx-auto">
                <div className="bg-navy-light/50 border border-primary/20 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Create New Ticket</h2>
                  <p className="text-gray-400 mb-8">Describe your issue and we'll get back to you as soon as possible.</p>

                  <form onSubmit={handleCreateTicket} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                      <input
                        type="text"
                        value={newTicket.subject}
                        onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Brief description of your issue"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                        <select
                          value={newTicket.category}
                          onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
                          className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-xl text-white focus:outline-none focus:border-primary transition-colors"
                          required
                        >
                          <option value="">Select category</option>
                          {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Priority *</label>
                        <select
                          value={newTicket.priority}
                          onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value as 'low' | 'medium' | 'high' | 'critical' })}
                          className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-xl text-white focus:outline-none focus:border-primary transition-colors"
                          required
                        >
                          <option value="low">Low - General inquiry</option>
                          <option value="medium">Medium - Standard issue</option>
                          <option value="high">High - Urgent issue</option>
                          <option value="critical">Critical - System down</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Description *</label>
                      <textarea
                        value={newTicket.description}
                        onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                        className="w-full px-4 py-3 bg-navy border border-primary/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors min-h-[150px]"
                        placeholder="Provide as much detail as possible about your issue..."
                        required
                      />
                    </div>

                    {/* File Upload Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Attachments
                        <span className="text-gray-500 font-normal ml-2">(Screenshots, images - max 20MB each)</span>
                      </label>
                      
                      {/* Upload Area */}
                      <div 
                        className="border-2 border-dashed border-primary/30 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                        onClick={() => ticketFileInputRef.current?.click()}
                      >
                        <input
                          ref={ticketFileInputRef}
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={(e) => handleFileSelect(e, setTicketAttachments)}
                        />
                        <Image className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                        <p className="text-gray-400 mb-1">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF, WebP up to 20MB</p>
                      </div>

                      {/* Upload Error */}
                      {uploadError && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {uploadError}
                        </motion.p>
                      )}

                      {/* Attachment Previews */}
                      {ticketAttachments.length > 0 && (
                        <div className="mt-4">
                          <p className="text-xs text-gray-500 mb-2">{ticketAttachments.length} file(s) attached</p>
                          <div className="flex flex-wrap gap-3">
                            {ticketAttachments.map(attachment => (
                              <AttachmentPreview
                                key={attachment.id}
                                attachment={attachment}
                                onRemove={() => removeAttachment(attachment.id, setTicketAttachments)}
                              />
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 mt-2">
                            Total size: {formatFileSize(ticketAttachments.reduce((sum, a) => sum + a.size, 0))}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setView('list');
                          setTicketAttachments([]);
                        }}
                        className="flex-1 px-6 py-3 border border-primary/30 text-gray-300 font-medium rounded-xl hover:bg-primary/10 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
                      >
                        Submit Ticket
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {/* Ticket Detail View */}
          {view === 'detail' && selectedTicket && (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Back Button */}
              <button
                onClick={() => {
                  setView('list');
                  setSelectedTicket(null);
                  setMessageAttachments([]);
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Tickets
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Ticket Header */}
                  <div className="bg-navy-light/50 border border-primary/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-sm font-mono text-primary">{selectedTicket.ticketNumber}</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${statusConfig[selectedTicket.status].color} text-white`}>
                        {statusConfig[selectedTicket.status].label}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${priorityConfig[selectedTicket.priority].color} text-white`}>
                        {priorityConfig[selectedTicket.priority].label}
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-3">{selectedTicket.subject}</h1>
                    <p className="text-gray-400">{selectedTicket.description}</p>
                    
                    {/* Ticket Attachments */}
                    {selectedTicket.attachments && selectedTicket.attachments.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-primary/10">
                        <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                          <Paperclip className="w-4 h-4" />
                          Attachments ({selectedTicket.attachments.length})
                        </p>
                        <AttachmentList attachments={selectedTicket.attachments} />
                      </div>
                    )}
                  </div>

                  {/* Admin Note (visible to user) */}
                  {selectedTicket.adminNote && user.role !== 'admin' && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Bell className="w-5 h-5 text-yellow-400" />
                        <h3 className="font-semibold text-yellow-400">Message from Support</h3>
                      </div>
                      <p className="text-gray-300">{selectedTicket.adminNote}</p>
                    </div>
                  )}

                  {/* Messages */}
                  <div className="bg-navy-light/50 border border-primary/20 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Conversation
                    </h3>

                    {selectedTicket.messages.length === 0 ? (
                      <div className="text-center py-8">
                        <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                        <p className="text-gray-400">No messages yet. Start the conversation below.</p>
                      </div>
                    ) : (
                      <div className="space-y-4 mb-6">
                        {selectedTicket.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === 'admin' ? 'justify-start' : 'justify-end'}`}
                          >
                            <div className={`max-w-[80%] ${message.sender === 'admin' ? 'order-2' : 'order-1'}`}>
                              <div className={`rounded-2xl p-4 ${
                                message.sender === 'admin'
                                  ? 'bg-navy border border-primary/20'
                                  : 'bg-gradient-to-r from-primary/20 to-blue/20 border border-primary/30'
                              }`}>
                                <p className="text-white">{message.content}</p>
                                {/* Message Attachments */}
                                {message.attachments && message.attachments.length > 0 && (
                                  <AttachmentList attachments={message.attachments} />
                                )}
                              </div>
                              <div className={`flex items-center gap-2 mt-2 text-xs text-gray-500 ${
                                message.sender === 'admin' ? 'justify-start' : 'justify-end'
                              }`}>
                                <span>{message.senderName}</span>
                                <span>•</span>
                                <span>{formatDate(message.timestamp)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Reply Form */}
                    {selectedTicket.status !== 'closed' && (
                      <form onSubmit={handleSendMessage} className="space-y-3">
                        {/* Message Attachments Preview */}
                        {messageAttachments.length > 0 && (
                          <div className="p-3 bg-navy rounded-xl border border-primary/20">
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-xs text-gray-400">{messageAttachments.length} file(s) attached</p>
                              <button
                                type="button"
                                onClick={() => setMessageAttachments([])}
                                className="text-xs text-red-400 hover:text-red-300"
                              >
                                Remove all
                              </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {messageAttachments.map(attachment => (
                                <AttachmentPreview
                                  key={attachment.id}
                                  attachment={attachment}
                                  onRemove={() => removeAttachment(attachment.id, setMessageAttachments)}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Upload Error */}
                        {uploadError && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400 text-sm"
                          >
                            {uploadError}
                          </motion.p>
                        )}
                        
                        <div className="flex gap-3">
                          {/* Attachment Button */}
                          <button
                            type="button"
                            onClick={() => messageFileInputRef.current?.click()}
                            className="px-3 py-3 bg-navy border border-primary/20 rounded-xl text-gray-400 hover:text-primary hover:border-primary/50 transition-colors"
                            title="Attach image"
                          >
                            <Paperclip className="w-5 h-5" />
                          </button>
                          <input
                            ref={messageFileInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => handleFileSelect(e, setMessageAttachments)}
                          />
                          
                          <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-3 bg-navy border border-primary/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                          />
                          <button
                            type="submit"
                            disabled={!newMessage.trim() && messageAttachments.length === 0}
                            className="px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-navy rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/30 transition-all"
                          >
                            <Send className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500">
                          You can attach screenshots or images (max 20MB each)
                        </p>
                      </form>
                    )}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Ticket Details */}
                  <div className="bg-navy-light/50 border border-primary/20 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Ticket Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Category</p>
                        <p className="text-white flex items-center gap-2">
                          <Tag className="w-4 h-4 text-primary" />
                          {selectedTicket.category}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Created</p>
                        <p className="text-white flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          {formatDate(selectedTicket.createdAt)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Last Updated</p>
                        <p className="text-white flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {formatDate(selectedTicket.updatedAt)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Admin Controls */}
                  {user.role === 'admin' && (
                    <div className="bg-navy-light/50 border border-primary/20 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-primary" />
                        Admin Controls
                      </h3>
                      <div className="space-y-4">
                        {/* Status Update */}
                        <div>
                          <label className="block text-xs text-gray-500 mb-2">Update Status</label>
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(statusConfig).map(([key, config]) => (
                              <button
                                key={key}
                                onClick={() => handleUpdateStatus(selectedTicket.id, key as TicketType['status'])}
                                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                                  selectedTicket.status === key
                                    ? `${config.color} text-white`
                                    : 'bg-navy border border-primary/20 text-gray-400 hover:border-primary/40'
                                }`}
                              >
                                {config.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Admin Note */}
                        <div>
                          <label className="block text-xs text-gray-500 mb-2">Note for Client</label>
                          <textarea
                            value={adminNote}
                            onChange={(e) => setAdminNote(e.target.value)}
                            className="w-full px-3 py-2 bg-navy border border-primary/20 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary transition-colors min-h-[80px]"
                            placeholder="Add a note that the client will see..."
                          />
                          <button
                            onClick={() => handleSaveAdminNote(selectedTicket.id)}
                            className="mt-2 w-full px-4 py-2 bg-primary/20 text-primary text-sm font-medium rounded-lg hover:bg-primary/30 transition-colors"
                          >
                            Save Note
                          </button>
                        </div>

                        {/* Client Info */}
                        {(() => {
                          const ticketUser = getUserById(selectedTicket.userId);
                          return ticketUser ? (
                            <div className="pt-4 border-t border-primary/10">
                              <p className="text-xs text-gray-500 mb-2">Client</p>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-blue/20 rounded-full flex items-center justify-center">
                                  <User className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-white">{ticketUser.name}</p>
                                  <p className="text-xs text-gray-400">{ticketUser.company}</p>
                                </div>
                              </div>
                            </div>
                          ) : null;
                        })()}
                      </div>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="bg-navy-light/50 border border-primary/20 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
                    <div className="space-y-3">
                      <a
                        href="mailto:infor@kypextech.co.za"
                        className="flex items-center gap-3 px-4 py-3 bg-navy rounded-xl text-gray-300 hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm">Email Support</span>
                      </a>
                      <Link
                        to="/contact"
                        className="flex items-center gap-3 px-4 py-3 bg-navy rounded-xl text-gray-300 hover:text-primary transition-colors"
                      >
                        <Home className="w-5 h-5" />
                        <span className="text-sm">Contact Page</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
