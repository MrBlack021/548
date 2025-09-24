import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import { FaGraduationCap } from 'react-icons/fa';

export default function Portfolio() {
  const projectData = [
    { name: "Data Cleaning", value: 30 },
    { name: "Visualization", value: 40 },
    { name: "Storytelling", value: 30 },
  ];

  const experienceData = [
    { skill: "Sourcing", value: 80 },
    { skill: "Screening", value: 75 },
    { skill: "Collaboration", value: 78 },
    { skill: "Analytics", value: 72 },
  ];

  const educationData = [
    { year: "2019", milestone: "Started B.Tech", university: "KL University" },
    { year: "2023", milestone: "Completed B.Tech", university: "KL University" },
    { year: "2023", milestone: "Started Master of Science in Analytics and Systems", university: "Bridgeport University" },
    { year: "2025", milestone: "Completed Master of Science in Analytics and Systems", university: "Bridgeport University", details: "Aug 2023 – May 2025, GPA: 3.71/4" },
  ];

  const dashboardData = [
    { category: "Skills", value: 78 },
    { category: "Projects", value: 80 },
    { category: "Experience", value: 76 },
    { category: "Education", value: 75 },
  ];

  const COLORS = ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold">Dhanunjaya Reddy Badduri</h1>
        <p className="text-lg text-gray-600 mt-2">Data Analyst | Talent Acquisition Specialist</p>
        <p className="text-sm text-gray-500 mt-1">Turning data into insights, and insights into strategy.</p>
        <div className="mt-4 flex justify-center gap-4">
          <Button>Download Resume</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </header>

      {/* About */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a motivated and results-driven professional with a strong foundation
          in <b>data analytics</b> and <b>talent acquisition</b>. With experience in
          both corporate and agency environments, I combine analytical skills and
          people-centric approaches to align hiring and data strategies with
          business objectives.
        </p>
      </section>

      {/* Dashboard Overview */}
      <section className="bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Dashboard Overview</h2>
        <div className="max-w-4xl mx-auto">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Data Analytics & Technical</h3>
                <p className="text-sm mb-2">SQL, Python (Pandas, NumPy)</p>
                <Progress value={80} className="mb-3" />
                <p className="text-sm mb-2">Excel, Tableau, Power BI</p>
                <Progress value={75} className="mb-3" />
                <p className="text-sm mb-2">Data Visualization & Reporting</p>
                <Progress value={78} className="mb-3" />
                <p className="text-sm mb-2">Database Management (MySQL, PostgreSQL)</p>
                <Progress value={72} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Recruitment & Talent Acquisition</h3>
                <p className="text-sm mb-2">Full-cycle recruitment, ATS</p>
                <Progress value={80} className="mb-3" />
                <p className="text-sm mb-2">Technical & non-technical hiring</p>
                <Progress value={76} className="mb-3" />
                <p className="text-sm mb-2">Employer branding</p>
                <Progress value={74} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Professional Strengths</h3>
                <p className="text-sm mb-2">Analytical problem-solving</p>
                <Progress value={80} className="mb-3" />
                <p className="text-sm mb-2">Strong communication</p>
                <Progress value={77} className="mb-3" />
                <p className="text-sm mb-2">Adaptability & learning</p>
                <Progress value={78} className="mb-3" />
                <p className="text-sm mb-2">Team collaboration</p>
                <Progress value={79} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Student Analytics Dashboard – KL University</h3>
            <p className="text-sm text-gray-600">6th Semester / 2022</p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <ul className="list-disc list-inside text-sm">
                <li>Built a dashboard using Excel and Tableau</li>
                <li>Analyzed student performance data and trends</li>
                <li>Presented insights with clear data storytelling</li>
              </ul>
              <ResponsiveContainer width="100%" height={200}>
                <RePieChart>
                  <Pie data={projectData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {projectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Recruitment Specialist</h3>
              <p className="text-sm text-gray-600">Bension Technology — Bangalore, India (07/2022 – 07/2023)</p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <ul className="list-disc list-inside text-sm">
                  <li>Managed full-cycle recruitment for technical and non-technical roles</li>
                  <li>Collaborated with hiring managers to align role requirements</li>
                  <li>Improved time-to-hire by 20% through optimized screening</li>
                  <li>Conducted data-driven analytics on recruitment KPIs</li>
                </ul>
                <ResponsiveContainer width="100%" height={250}>
                  <RadarChart data={experienceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Experience" dataKey="value" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Education Timeline</h2>
        <div className="relative border-l-2 border-blue-500 ml-4">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-6 ml-6 relative flex items-start">
              <span className="flex-shrink-0 mt-1 mr-3 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white">
                <FaGraduationCap />
              </span>
              <div>
                <p className="font-semibold">{edu.milestone} - {edu.university}</p>
                {edu.details && <p className="text-xs text-gray-500">{edu.details}</p>}
                <p className="text-xs text-gray-400">Year: {edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="bg-gray-900 text-white py-8 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-sm">📍 Jersey City, NJ, USA</p>
          <p className="text-sm">📧 Dhanunjayareddybadduri@gmail.com</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>
            <a href="#" className="text-blue-400 hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}