import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Trophy, 
  Calendar, 
  Code2, 
  BookOpen, 
  Download, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Rocket,
  ArrowRight,
  Shield,
  Layers,
  Users
} from 'lucide-react';

// --- COMPONENTS ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Navbar = () => (
  <nav>
    <div className="container nav-inner">
      <Link to="/" className="logo">
        <Cpu size={24} />
        LLM HACKATHON
      </Link>
      <div className="nav-links">
        <NavLink to="/problem" className="nav-link" activeClassName="active">Problem</NavLink>
        <NavLink to="/schedule" className="nav-link">Schedule</NavLink>
        <NavLink to="/setup" className="nav-link">Setup</NavLink>
        <NavLink to="/resources" className="nav-link">Resources</NavLink>
        <NavLink to="/assets" className="nav-link">GTM Assets</NavLink>
        <NavLink to="/results" className="nav-link">Results</NavLink>
        <Link to="/register" className="btn btn-primary">Register Now</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)' }}>
    <div className="container">
      <p>© 2026 LLM Developer Hackathon & Workshop Program. Built for Enterprise Scale.</p>
    </div>
  </footer>
);

const CodeBlock = ({ title, code }) => (
  <div className="code-window">
    <div className="code-header">
      <div className="dot red"></div>
      <div className="dot yellow"></div>
      <div className="dot green"></div>
      <span style={{ fontSize: '0.8rem', marginLeft: '1rem', color: 'var(--text-muted)' }}>{title}</span>
    </div>
    <pre><code>{code}</code></pre>
  </div>
);

// --- PAGES ---

const HomePage = () => (
  <div className="fade-in">
    <div className="hero">
      <div className="container">
        <span className="tagline">Scale Your AI Data Engineering</span>
        <h1>LLM Developer Hackathon <br/> & Workshop Program</h1>
        <p>Build production-ready, AI-powered data workflows using dbt and Airflow on the Snowflake Data Cloud.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/problem" className="btn btn-primary">View Challenge <ArrowRight size={18}/></Link>
          <Link to="/setup" className="btn" style={{ border: '1px solid var(--border)' }}>Getting Started</Link>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-value">35+</span>
            <span className="stat-label">Participants</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">91%</span>
            <span className="stat-label">Completion Rate</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">4</span>
            <span className="stat-label">GTM Assets Produced</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">2 Days</span>
            <span className="stat-label">Intensive Building</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProblemPage = () => (
  <div className="main-content fade-in">
    <div className="container">
      <h2 className="section-title">The Challenge</h2>
      <div className="grid-2">
        <div>
          <h3>Build AI-Powered Data Pipelines</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            Participants must automate complex data engineering tasks using LLM APIs integrated directly into dbt transformations and Airflow DAGs. The goal is to move beyond simple prompts to robust, scaleable AI-data architectures.
          </p>
          <div className="card" style={{ marginTop: '2rem' }}>
            <h4>Difficulty Level: Advanced</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Requires existing knowledge of SQL, dbt, and Python. We provide pre-configured Snowflake environments and API keys.
            </p>
          </div>
        </div>
        <div className="card">
          <h4>Judging Criteria</h4>
          <table style={{ width: '100%', marginTop: '1.5rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '1rem 0' }}>Criteria</th>
                <th style={{ textAlign: 'right', padding: '1rem 0' }}>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '1rem 0' }}>Technical Execution</td><td style={{ textAlign: 'right' }}>40%</td></tr>
              <tr><td style={{ padding: '1rem 0' }}>Business Impact</td><td style={{ textAlign: 'right' }}>30%</td></tr>
              <tr><td style={{ padding: '1rem 0' }}>Reusability</td><td style={{ textAlign: 'right' }}>30%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

const SchedulePage = () => (
  <div className="main-content fade-in">
    <div className="container">
      <h2 className="section-title">Event Schedule</h2>
      <div className="grid-2">
        <div className="card">
          <h3 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Day 1: Theoretical Foundation & Infrastructure</h3>
          <div className="timeline">
            <div className="timeline-item">
              <strong>09:00 AM — Morning Keynote</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Concept walkthrough: LLMs in the Data Stack</p>
            </div>
            <div className="timeline-item">
              <strong>01:00 PM — Development Phase</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Build time: Initial prompt engineering and dbt setup</p>
            </div>
            <div className="timeline-item">
              <strong>06:00 PM — Evening Check-in</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Progress review and environment debugging</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>Day 2: Execution & GTM Strategy</h3>
          <div className="timeline">
            <div className="timeline-item">
              <strong>09:00 AM — Intensive Sprint</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full pipeline integration with Airflow and LangChain</p>
            </div>
            <div className="timeline-item">
              <strong>03:00 PM — Submissions</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Project finalization and GTM asset creation</p>
            </div>
            <div className="timeline-item">
              <strong>05:00 PM — Final Presentations</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Showcase and judging panel evaluation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SetupPage = () => (
  <div className="main-content fade-in">
    <div className="container" style={{ maxWidth: '900px' }}>
      <h2 className="section-title">Environment Setup</h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>Everything you need is pre-configured for immediate building.</p>
      
      <div className="stats-grid" style={{ marginBottom: '4rem' }}>
        <div className="stat-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <Shield size={32} color="var(--primary)" style={{ marginBottom: '1rem' }}/>
          <p>Snowflake Trial</p>
        </div>
        <div className="stat-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <Cpu size={32} color="var(--primary)" style={{ marginBottom: '1rem' }}/>
          <p>OpenAI Keys</p>
        </div>
        <div className="stat-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <Layers size={32} color="var(--primary)" style={{ marginBottom: '1rem' }}/>
          <p>dbt Core v1.7</p>
        </div>
      </div>

      <h3>Step 1: Initialize Your Project</h3>
      <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>Clone the official hackathon starter repo and install dependencies.</p>
      <CodeBlock title="terminal" code={`git clone https://github.com/snowflake-labs/llm-hackathon-starter.git\ncd llm-hackathon-starter\npip install -r requirements.txt`} />

      <h3 style={{ marginTop: '3rem' }}>Step 2: Connect to LLM API</h3>
      <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>Use the provides environment variables to make your first call.</p>
      <CodeBlock title="verify_connection.py" code={`import os\nfrom langchain_openai import ChatOpenAI\n\nllm = ChatOpenAI(api_key=os.getenv("OPENAI_API_KEY"))\nresponse = llm.invoke("Test ping for hackathon setup")\nprint(response.content)`} />
    </div>
  </div>
);

const Module = ({ title, icon: Icon, children }) => (
  <div className="card" style={{ marginBottom: '2rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
      <Icon color="var(--primary)" size={28} />
      <h3>{title}</h3>
    </div>
    {children}
  </div>
);

const ResourcesPage = () => (
  <div className="main-content fade-in">
    <div className="container">
      <h2 className="section-title">Technical Resources</h2>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Module title="RAG Systems" icon={BookOpen}>
          <p>Retrieve external data for context-aware generation. Essential for grounding business data.</p>
          <CodeBlock title="rag_pattern.py" code={`# Pseudo-code pattern\nretrieved_docs = vector_store.similarity_search(query)\nresponse = agent.run(context=retrieved_docs, question=query)`} />
        </Module>
        
        <Module title="Function Calling" icon={Terminal}>
          <p>Enable models to call specific SQL functions or Python scripts automatically.</p>
          <CodeBlock title="tools.json" code={`{\n  "name": "run_dbt_model",\n  "description": "Trigger a dbt refresh for specified model",\n  "parameters": { ... }\n}`} />
        </Module>

        <Module title="dbt & Airflow Integration" icon={Layers}>
          <p>Orchestrate your AI logic within standard data engineering workflows.</p>
          <CodeBlock title="dag.py" code={`@dag(schedule="@daily")\ndef ai_quality_check():\n    dbt_run = DbtTask(model="raw_leads")\n    llm_audit = PythonTask(python_callable=audit_data_quality)`} />
        </Module>
      </div>
    </div>
  </div>
);

const AssetsPage = () => (
  <div className="main-content fade-in">
    <div className="container">
      <h2 className="section-title">GTM Assets Portfolio</h2>
      <div className="stats-grid">
        <div className="card">
          <h4>Solution Brief Template</h4>
          <p style={{ margin: '1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Professional one-pager for technical stakeholder alignment.</p>
          <button className="btn btn-primary" style={{ width: '100%' }}><Download size={18} /> Download Brief</button>
        </div>
        <div className="card">
          <h4>Demo Walkthrough Script</h4>
          <p style={{ margin: '1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Scripted journey for high-impact executive presentations.</p>
          <button className="btn btn-primary" style={{ width: '100%' }}><Download size={18} /> Download Script</button>
        </div>
        <div className="card">
          <h4>Data Quality Playbook</h4>
          <p style={{ margin: '1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Standardized workflow for LLM-based data auditing.</p>
          <button className="btn btn-primary" style={{ width: '100%' }}><Download size={18} /> Download Playbook</button>
        </div>
        <div className="card">
          <h4>Governance Playbook</h4>
          <p style={{ margin: '1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Policy and safety patterns for enterprise AI deployment.</p>
          <button className="btn btn-primary" style={{ width: '100%' }}><Download size={18} /> Download Playbook</button>
        </div>
      </div>
    </div>
  </div>
);

const ResultsPage = () => (
  <div className="main-content fade-in">
    <div className="container">
      <h2 className="section-title">Program Impact</h2>
      
      <div className="stats-grid" style={{ marginBottom: '5rem' }}>
        <div className="stat-card" style={{ textAlign: 'center' }}>
          <span className="stat-value">91%</span>
          <p className="stat-label">Completion Rate</p>
        </div>
        <div className="stat-card" style={{ textAlign: 'center' }}>
          <span className="stat-value">35+</span>
          <p className="stat-label">Participants Enabled</p>
        </div>
        <div className="stat-card" style={{ textAlign: 'center' }}>
          <span className="stat-value">4</span>
          <p className="stat-label">Field Teams Supported</p>
        </div>
      </div>

      <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Winning Projects</h3>
      <div className="grid-2">
        <div className="card">
          <Trophy color="#FFD700" size={32} style={{ marginBottom: '1rem' }}/>
          <h4>AI-Powered Data Steward</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem' }}>An autonomous agent that monitors Snowflake data quality and automatically updates dbt document metadata based on schema changes.</p>
        </div>
        <div className="card">
          <Trophy color="#C0C0C0" size={32} style={{ marginBottom: '1rem' }}/>
          <h4>Smart SQL Optimizer</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem' }}>Fine-tuned approach to suggest index improvements and SQL rewrites for complex dbt transformations using LLM reasoning.</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: '3rem', borderLeft: '4px solid var(--primary)' }}>
        <h4>Key Patterns Emerged</h4>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
          <li style={{ marginBottom: '0.5rem' }}>High preference for RAG over fine-tuning for schema-specific tasks.</li>
          <li style={{ marginBottom: '0.5rem' }}>Shift towards decentralized AI nodes within Airflow tasks.</li>
          <li style={{ marginBottom: '0.5rem' }}>Critical focus on semantic layer consistency during agent execution.</li>
        </ul>
      </div>
    </div>
  </div>
);

const RegisterPage = () => (
  <div className="main-content fade-in">
    <div className="container" style={{ maxWidth: '600px' }}>
      <h2 className="section-title">Request Your Invite</h2>
      <div className="card">
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', textAlign: 'center' }}>
          Admission to the LLM Developer Hackathon is selective. Please provide your details to apply for a slot.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); alert("Request submitted! Our team will review your application."); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary)' }}>FULL NAME</label>
            <input type="text" placeholder="Jane Doe" style={{ background: 'var(--bg-deep)', border: '1px solid var(--border)', padding: '0.75rem', borderRadius: '8px', color: 'white' }} required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary)' }}>COMPANY EMAIL</label>
            <input type="email" placeholder="jane@company.ai" style={{ background: 'var(--bg-deep)', border: '1px solid var(--border)', padding: '0.75rem', borderRadius: '8px', color: 'white' }} required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary)' }}>ROLE</label>
            <select style={{ background: 'var(--bg-deep)', border: '1px solid var(--border)', padding: '0.75rem', borderRadius: '8px', color: 'white' }}>
              <option>Data Engineer</option>
              <option>Data Architect</option>
              <option>ML Engineer</option>
              <option>Solution Architect</option>
              <option>Other</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary)' }}>DBT / AIRFLOW EXPERIENCE</label>
            <textarea placeholder="Tell us about your background with data orchestration..." style={{ background: 'var(--bg-deep)', border: '1px solid var(--border)', padding: '0.75rem', borderRadius: '8px', color: 'white', minHeight: '100px' }}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>
            Submit Application <Rocket size={18} />
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- APP ---

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/problem" element={<ProblemPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/setup" element={<SetupPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
