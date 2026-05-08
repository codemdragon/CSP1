const TOPICS = [
{id:"numsys",icon:"🔢",title:"Number Systems",notes:`
<h3>Number Bases</h3>
<ul>
<li><strong>Denary (Base-10)</strong> – Digits 0-9. What humans use.</li>
<li><strong>Binary (Base-2)</strong> – Digits 0 and 1 (bits). What computers use.</li>
<li><strong>Hexadecimal (Base-16)</strong> – Digits 0-9 + A-F. Shorthand for binary (1 hex = 4 bits).</li>
</ul>

<h3>Conversions</h3>
<div class="highlight-box">
<strong>Binary → Denary:</strong> Add place values where bit = 1<br>
e.g. <code>1101</code> = 8+4+0+1 = <strong>13</strong><br><br>
<strong>Denary → Binary:</strong> Divide by 2 repeatedly, read remainders bottom-up<br>
e.g. 25 → 12r1 → 6r0 → 3r0 → 1r1 → 0r1 = <code>11001</code><br><br>
<strong>Hex ↔ Binary:</strong> Each hex digit = 4-bit nibble<br>
e.g. <code>A3</code> = <code>1010 0011</code>
</div>

<h3>Place Value Diagram</h3>
<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:.82rem;margin:10px 0">
<tr style="background:rgba(124,92,252,.12)">
<th style="padding:6px 10px;border:1px solid var(--border)">2⁷</th>
<th style="padding:6px 10px;border:1px solid var(--border)">2⁶</th>
<th style="padding:6px 10px;border:1px solid var(--border)">2⁵</th>
<th style="padding:6px 10px;border:1px solid var(--border)">2⁴</th>
<th style="padding:6px 10px;border:1px solid var(--border)">2³</th>
<th style="padding:6px 10px;border:1px solid var(--border)">2²</th>
<th style="padding:6px 10px;border:1px solid var(--border)">2¹</th>
<th style="padding:6px 10px;border:1px solid var(--border)">2⁰</th>
</tr>
<tr style="text-align:center;color:var(--accent2)">
<td style="padding:6px;border:1px solid var(--border)">128</td>
<td style="padding:6px;border:1px solid var(--border)">64</td>
<td style="padding:6px;border:1px solid var(--border)">32</td>
<td style="padding:6px;border:1px solid var(--border)">16</td>
<td style="padding:6px;border:1px solid var(--border)">8</td>
<td style="padding:6px;border:1px solid var(--border)">4</td>
<td style="padding:6px;border:1px solid var(--border)">2</td>
<td style="padding:6px;border:1px solid var(--border)">1</td>
</tr>
</table>
</div>

<h3>Unsigned Integers</h3>
<ul>
<li>Only positive values. Range for n bits: <strong>0</strong> to <strong>2ⁿ − 1</strong></li>
<li>8 bits → 0 to 255 | 16 bits → 0 to 65535</li>
</ul>

<h3>Signed Integers – Two's Complement</h3>
<div class="highlight-box">
<strong>MSB (leftmost bit) is NEGATIVE</strong> → value = −2ⁿ⁻¹<br>
Range for n bits: <strong>−2ⁿ⁻¹</strong> to <strong>2ⁿ⁻¹ − 1</strong><br>
8 bits → −128 to +127<br><br>
<strong>To negate (find negative):</strong><br>
1. Flip ALL bits (0↔1)<br>
2. Add 1<br><br>
Example: +5 = <code>00000101</code><br>
Flip → <code>11111010</code> → Add 1 → <code>11111011</code> = −5 ✓
</div>
<ul>
<li>✅ Only ONE representation for zero</li>
<li>✅ Subtraction = just add the negative</li>
</ul>

<h3>Binary Coded Decimal (BCD)</h3>
<ul>
<li>Each <strong>denary digit</strong> → its own 4-bit nibble</li>
<li><strong>Packed BCD:</strong> 2 digits per byte</li>
<li>Example: 39 → <code>0011 1001</code> (not the same as binary 39!)</li>
<li><strong>Uses:</strong> Calculators, electronic displays, currency (avoids rounding errors)</li>
</ul>

<h3>Binary Shifts</h3>
<div class="highlight-box">
<strong>Logical Left Shift:</strong> Bits move left, 0 fills right. Multiplies by 2 per shift.<br>
<code>00001100</code> ← shift 1 → <code>00011000</code> (12 → 24)<br><br>
<strong>Logical Right Shift:</strong> Bits move right, 0 fills left. Divides by 2 per shift.<br>
<code>00001100</code> → shift 1 → <code>00000110</code> (12 → 6)<br><br>
<strong>Arithmetic Right Shift:</strong> Preserves sign bit (MSB stays). Used for signed numbers.
</div>

<h3>Overflow</h3>
<p>When a calculation result exceeds available bits. e.g. 8-bit unsigned: 200 + 100 = 300 → exceeds 255 → <strong>overflow!</strong></p>`,
quiz:[
{q:"What is the denary value of binary 1011?",opts:["9","11","13","10"],ans:1,exp:"1011 = 8+0+2+1 = 11"},
{q:"In two's complement, the MSB represents:",opts:["The largest positive value","A negative value","Zero","Overflow flag"],ans:1,exp:"In two's complement, the MSB has a negative weight (−2ⁿ⁻¹)."},
{q:"To negate in two's complement you:",opts:["Flip bits only","Flip bits then add 1","Subtract from 0","Add 1 then flip"],ans:1,exp:"Negate = flip all bits (1↔0) then add 1."},
{q:"BCD for denary 47 is:",opts:["00101111","01000111","0100 0111","101111"],ans:2,exp:"BCD: 4=0100, 7=0111, so 47 = 0100 0111"},
{q:"A logical LEFT shift by 1 does what?",opts:["Divides by 2","Multiplies by 2","Adds 1","Subtracts 1"],ans:1,exp:"Left shift = multiply by 2. Each position moved left doubles the value."},
{q:"8-bit unsigned integer range is:",opts:["0 to 128","0 to 255","-128 to 127","0 to 256"],ans:1,exp:"8-bit unsigned: 0 to 2⁸−1 = 0 to 255."},
{q:"8-bit two's complement range is:",opts:["0 to 255","-128 to 127","-127 to 128","-256 to 255"],ans:1,exp:"8-bit two's complement: −2⁷ to 2⁷−1 = −128 to 127."},
{q:"Hex A3 in binary is:",opts:["10100011","10110011","10100010","11000011"],ans:0,exp:"A=1010, 3=0011, so A3 = 10100011."},
{q:"Packed BCD stores ___ digits per byte.",opts:["1","2","4","8"],ans:1,exp:"Packed BCD = 2 denary digits per byte (4 bits each)."},
{q:"A right shift by 2 divides by:",opts:["2","4","8","16"],ans:1,exp:"Each right shift divides by 2, so 2 shifts = divide by 2² = 4."}
]},

{id:"comm",icon:"🌐",title:"Networks & Topologies",notes:`
<h3>Network Types</h3>
<ul>
<li><strong>LAN</strong> – Small area (building). Hardware owned by org.</li>
<li><strong>WAN</strong> – Large area (cities/countries). Uses PSTN/satellites.</li>
</ul>
<h3>Topologies</h3>
<ul>
<li><strong>Bus</strong> – Single shared cable (backbone). Cheap but single point of failure.</li>
<li><strong>Star</strong> – All nodes → central switch/hub. Most common. Hub fails = all fail.</li>
<li><strong>Mesh</strong> – Nodes interconnected. Redundant. Used in Internet backbone.</li>
</ul>
<h3>Client-Server vs P2P</h3>
<ul>
<li><strong>Client-Server</strong>: Central server provides resources. Thin client (server does processing) vs Thick client (local processing).</li>
<li><strong>P2P</strong>: Equal nodes share resources directly. No central point.</li>
</ul>`,
quiz:[
{q:"Which topology uses a single shared cable?",opts:["Star","Bus","Mesh","Ring"],ans:1,exp:"Bus topology uses one backbone cable all devices connect to."},
{q:"In a star topology, what happens if the central hub fails?",opts:["Only one node fails","Nothing","Entire network fails","Network slows down"],ans:2,exp:"All communication goes through the hub, so if it fails, the whole network goes down."},
{q:"What type of client does most processing on the server?",opts:["Thick client","Thin client","Fat client","Smart client"],ans:1,exp:"Thin client relies on the server for most processing."},
{q:"LAN stands for?",opts:["Large Area Network","Local Access Network","Local Area Network","Linked Area Network"],ans:2,exp:"LAN = Local Area Network, covers a small geographical area."},
{q:"Which topology provides the most redundancy?",opts:["Bus","Star","Ring","Mesh"],ans:3,exp:"Mesh has multiple paths between nodes, providing maximum redundancy."}
]},

{id:"hw-proto",icon:"🔌",title:"Hardware & Protocols",notes:`
<h3>Network Hardware</h3>
<ul>
<li><strong>Router</strong> – Connects different networks, selects best path for data packets.</li>
<li><strong>Switch</strong> – Connects devices within a LAN using MAC addresses.</li>
<li><strong>NIC</strong> – Network Interface Card, gives each device a unique MAC address.</li>
</ul>
<h3>Transmission Media</h3>
<ul>
<li><strong>Twisted Pair</strong> (copper) – Cheap, short distances</li>
<li><strong>Fibre-optic</strong> (light) – Fast, long distances, no interference</li>
<li><strong>Wireless</strong> – Radio/Microwave/Infrared</li>
</ul>
<h3>IP Addressing</h3>
<ul>
<li><strong>IPv4</strong>: 32-bit, dotted decimal (e.g. 192.168.1.1)</li>
<li><strong>IPv6</strong>: 128-bit, hexadecimal notation</li>
<li><strong>Public IP</strong> – Unique on internet. <strong>Private IP</strong> – Used within LAN.</li>
</ul>
<h3>DNS</h3>
<p>Domain Name System – Translates domain names (google.com) → IP addresses. Like a phonebook for the internet.</p>`,
quiz:[
{q:"What does a router do?",opts:["Connects devices in a LAN","Connects different networks","Assigns IP addresses","Stores data"],ans:1,exp:"A router connects different networks and selects the best path for packets."},
{q:"A switch uses ___ addresses to forward data.",opts:["IP","MAC","DNS","URL"],ans:1,exp:"Switches operate at data link layer using MAC addresses."},
{q:"IPv4 addresses are how many bits?",opts:["16","64","128","32"],ans:3,exp:"IPv4 = 32 bits, written as 4 dotted decimal octets."},
{q:"What does DNS do?",opts:["Encrypts data","Translates domain names to IPs","Assigns MAC addresses","Routes packets"],ans:1,exp:"DNS = Domain Name System, translates human-readable names to IP addresses."},
{q:"Which medium is immune to electromagnetic interference?",opts:["Twisted pair","Coaxial","Fibre-optic","Wireless"],ans:2,exp:"Fibre-optic uses light, making it immune to electromagnetic interference."}
]},

{id:"proc",icon:"🧠",title:"Processor & FDE Cycle",notes:`
<h3>Von Neumann Architecture</h3>
<ul>
<li>Instructions & data stored in <strong>same memory</strong></li>
<li>Sequential execution</li>
<li>Components: CPU + Memory + I/O</li>
</ul>
<h3>CPU Components</h3>
<ul>
<li><strong>ALU</strong> – Arithmetic & Logic operations</li>
<li><strong>CU</strong> – Control Unit, manages data flow & signals</li>
</ul>
<h3>Key Registers</h3>
<ul>
<li><strong>PC</strong> (Program Counter) – Address of NEXT instruction</li>
<li><strong>MAR</strong> (Memory Address Register) – Address being accessed</li>
<li><strong>MDR</strong> (Memory Data Register) – Data read/written</li>
<li><strong>CIR</strong> (Current Instruction Register) – Instruction being decoded</li>
<li><strong>ACC</strong> (Accumulator) – Stores ALU results</li>
<li><strong>IX</strong> (Index Register) – For indexed addressing</li>
</ul>
<h3>Buses</h3>
<ul>
<li><strong>Address Bus</strong> – One-way (CPU→Memory), carries addresses</li>
<li><strong>Data Bus</strong> – Bi-directional, carries data</li>
<li><strong>Control Bus</strong> – Bi-directional, carries control signals</li>
</ul>
<h3>Fetch-Decode-Execute Cycle</h3>
<div class="highlight-box">
<strong>FETCH:</strong> PC → MAR → Memory → MDR → CIR, then PC increments<br>
<strong>DECODE:</strong> CU decodes the instruction in CIR<br>
<strong>EXECUTE:</strong> ALU performs operation / data transferred
</div>
<h3>Interrupts</h3>
<p>Signals that pause FDE cycle for urgent tasks. CPU saves current state, handles interrupt, then restores state.</p>`,
quiz:[
{q:"In Von Neumann architecture, where are instructions and data stored?",opts:["Separate memories","Same memory","Only in registers","On disk"],ans:1,exp:"Von Neumann = instructions and data share the same memory."},
{q:"Which register holds the address of the NEXT instruction?",opts:["MAR","MDR","CIR","PC"],ans:3,exp:"PC (Program Counter) always points to the next instruction to fetch."},
{q:"The Address Bus is:",opts:["Bi-directional","One-way (CPU to Memory)","One-way (Memory to CPU)","Tri-directional"],ans:1,exp:"Address bus is unidirectional – CPU sends addresses to memory."},
{q:"What does CIR hold?",opts:["Next instruction address","Data from memory","Current instruction being decoded","ALU result"],ans:2,exp:"CIR = Current Instruction Register, holds the instruction currently being decoded."},
{q:"What happens first in the FDE cycle?",opts:["CU decodes CIR","PC copied to MAR","ALU calculates","MDR copied to CIR"],ans:1,exp:"First step: contents of PC are copied to MAR to fetch the instruction."},
{q:"The Data Bus carries:",opts:["Only data","Only addresses","Data and instructions","Control signals"],ans:2,exp:"The data bus carries both data AND instructions between CPU and memory."},
{q:"What does the ALU do?",opts:["Fetches instructions","Manages I/O","Performs arithmetic and logic","Stores addresses"],ans:2,exp:"ALU = Arithmetic Logic Unit, performs calculations and logical comparisons."}
]},

{id:"sql",icon:"🗄️",title:"SQL & Databases",notes:`
<h3>Relational Database Concepts</h3>
<ul>
<li><strong>Table (Relation)</strong> – Data organized in rows & columns</li>
<li><strong>Attribute</strong> – Column (field)</li>
<li><strong>Tuple</strong> – Row (record)</li>
<li><strong>DBMS</strong> – Database Management System: software to create, manage, query and secure databases. Provides query processor + developer interface.</li>
</ul>

<h3>Keys</h3>
<ul>
<li><strong>Primary Key</strong> – Uniquely identifies each record. Cannot be NULL.</li>
<li><strong>Foreign Key</strong> – Attribute in one table that references the primary key of another table.</li>
<li><strong>Candidate Key</strong> – Any attribute that COULD serve as the primary key.</li>
<li><strong>Composite Key</strong> – Primary key made of TWO or more attributes combined.</li>
</ul>

<h3>Data Integrity</h3>
<div class="highlight-box">
<strong>Entity Integrity:</strong> Every table must have a primary key, and it must be unique and NOT NULL.<br><br>
<strong>Referential Integrity:</strong> A foreign key value must either match an existing primary key in the referenced table OR be NULL. You cannot delete a record if another table's foreign key references it.<br><br>
<strong>Domain Integrity:</strong> Values in a column must be of the correct data type and within allowed range (e.g. Age must be an integer, not text).
</div>

<h3>Normalization</h3>
<ul>
<li><strong>1NF</strong> – No repeating groups, all values are atomic (indivisible)</li>
<li><strong>2NF</strong> – 1NF + no <strong>partial dependencies</strong></li>
<li><strong>3NF</strong> – 2NF + no <strong>transitive dependencies</strong></li>
</ul>
<div class="highlight-box">
<strong>Partial Dependency:</strong> A non-key attribute depends on only PART of a composite primary key, not the whole key.<br>
Example: Table (StudentID, CourseID, StudentName) → StudentName depends only on StudentID, not on (StudentID + CourseID). Fix: move StudentName to a separate Students table.<br><br>
<strong>Transitive Dependency:</strong> A non-key attribute depends on ANOTHER non-key attribute instead of the primary key.<br>
Example: Table (StudentID, DeptID, DeptName) → DeptName depends on DeptID, not on StudentID. Fix: move DeptID → DeptName to a separate Departments table.
</div>

<h3>SQL – DDL (Data Definition Language)</h3>
<div class="highlight-box">
<strong>CREATE TABLE:</strong><br>
<code>CREATE TABLE Students (</code><br>
<code>&nbsp;&nbsp;StudentID INT PRIMARY KEY,</code><br>
<code>&nbsp;&nbsp;Name VARCHAR(50) NOT NULL,</code><br>
<code>&nbsp;&nbsp;Age INT,</code><br>
<code>&nbsp;&nbsp;DeptID INT,</code><br>
<code>&nbsp;&nbsp;FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)</code><br>
<code>);</code><br><br>
<strong>ALTER TABLE</strong> – Modify existing table structure:<br>
<code>ALTER TABLE Students ADD Email VARCHAR(100);</code><br>
<code>ALTER TABLE Students DROP COLUMN Age;</code><br><br>
<strong>DROP TABLE</strong> – Delete entire table:<br>
<code>DROP TABLE Students;</code>
</div>

<h3>SQL – DML (Data Manipulation Language)</h3>
<ul>
<li><code>INSERT INTO Students (Name, Age) VALUES ('Ali', 17);</code></li>
<li><code>UPDATE Students SET Age = 18 WHERE Name = 'Ali';</code></li>
<li><code>DELETE FROM Students WHERE Age < 16;</code></li>
</ul>

<h3>SQL – DQL (Queries)</h3>
<ul>
<li><code>SELECT Name, Age FROM Students WHERE Age > 16 ORDER BY Age DESC;</code></li>
<li><code>SELECT COUNT(*) FROM Students;</code> – Aggregate function</li>
<li><code>SELECT DeptID, COUNT(*) FROM Students GROUP BY DeptID;</code></li>
</ul>

<h3>INNER JOIN</h3>
<div class="highlight-box">
Combines rows from two tables where the join condition is met (matching values in both tables).<br><br>
<code>SELECT Students.Name, Departments.DeptName</code><br>
<code>FROM Students</code><br>
<code>INNER JOIN Departments</code><br>
<code>ON Students.DeptID = Departments.DeptID;</code><br><br>
Only rows where DeptID exists in BOTH tables are returned. Unmatched rows are excluded.
</div>`,
quiz:[
{q:"A row in a database table is called a:",opts:["Attribute","Relation","Tuple","Field"],ans:2,exp:"Tuple = row/record in a relational database."},
{q:"What does a Foreign Key do?",opts:["Uniquely identifies a record","Links to primary key of another table","Encrypts data","Sorts records"],ans:1,exp:"Foreign key creates a link between two tables by referencing another table's primary key."},
{q:"1NF requires:",opts:["No transitive dependencies","No partial dependencies","No repeating groups, atomic values","Foreign keys"],ans:2,exp:"1NF = no repeating groups and all values must be atomic (indivisible)."},
{q:"Which SQL command retrieves data?",opts:["INSERT","UPDATE","SELECT","CREATE"],ans:2,exp:"SELECT is the DQL command used to query/retrieve data."},
{q:"DROP TABLE is a ___ command.",opts:["DML","DQL","DDL","DCL"],ans:2,exp:"DROP TABLE is DDL (Data Definition Language) – it defines/modifies structure."},
{q:"3NF removes:",opts:["Repeating groups","Partial dependencies","Transitive dependencies","All dependencies"],ans:2,exp:"3NF = 2NF + no transitive dependencies (non-key depending on non-key)."},
{q:"Which SQL clause sorts results?",opts:["GROUP BY","WHERE","HAVING","ORDER BY"],ans:3,exp:"ORDER BY sorts the result set (ASC or DESC)."},
{q:"Referential integrity ensures:",opts:["Primary keys are unique","Foreign key matches a valid primary key or is NULL","Data types are correct","Tables have names"],ans:1,exp:"Referential integrity = every foreign key value must match an existing primary key in the referenced table, or be NULL."},
{q:"Entity integrity requires:",opts:["Foreign keys exist","Primary key is unique and NOT NULL","All values are integers","Tables are normalised"],ans:1,exp:"Entity integrity = every table has a primary key that is unique and cannot be NULL."},
{q:"A partial dependency is when:",opts:["A non-key depends on another non-key","A non-key depends on part of a composite key","A key depends on a non-key","All attributes depend on the key"],ans:1,exp:"Partial dependency = a non-key attribute depends on only PART of a composite primary key."},
{q:"A transitive dependency is when:",opts:["A non-key depends on another non-key","A key depends on a non-key","All fields depend on the primary key","Foreign key references primary key"],ans:0,exp:"Transitive dependency = non-key attribute A depends on non-key attribute B, instead of directly on the primary key."},
{q:"INNER JOIN returns:",opts:["All rows from both tables","Only matching rows from both tables","All rows from the left table","Only unmatched rows"],ans:1,exp:"INNER JOIN returns only the rows where the join condition matches in BOTH tables."},
{q:"ALTER TABLE is used to:",opts:["Delete a table","Query data","Modify table structure","Insert records"],ans:2,exp:"ALTER TABLE modifies existing table structure – add/drop columns, change data types."},
{q:"Which defines a foreign key in CREATE TABLE?",opts:["PRIMARY KEY (col)","FOREIGN KEY (col) REFERENCES Table(col)","NOT NULL","UNIQUE"],ans:1,exp:"FOREIGN KEY (col) REFERENCES OtherTable(col) creates the referential link."},
{q:"A composite key is:",opts:["A single unique column","Two or more columns forming the primary key","A foreign key","An index"],ans:1,exp:"Composite key = primary key made up of two or more attributes combined."},
{q:"SELECT COUNT(*) is a:",opts:["DDL command","Join type","Aggregate function","Table constraint"],ans:2,exp:"COUNT(*) is an aggregate function that counts the number of rows."}
]},

{id:"mem",icon:"💾",title:"Memory & Storage",notes:`
<h3>Primary Memory</h3>
<ul>
<li><strong>RAM</strong> – Volatile, read-write
  <ul>
  <li><strong>DRAM</strong> – Uses capacitors, needs refreshing. Cheaper, used for main memory.</li>
  <li><strong>SRAM</strong> – Uses flip-flops, no refresh needed. Faster, used for cache.</li>
  </ul>
</li>
<li><strong>ROM</strong> – Non-volatile, read-only. Stores bootstrap/startup programs.</li>
</ul>
<h3>Secondary Storage</h3>
<ul>
<li><strong>Magnetic</strong> – Hard disk (platters), Tape (sequential)</li>
<li><strong>Optical</strong> – CD/DVD/Blu-ray (pits and lands, laser)</li>
<li><strong>Solid State</strong> – SSD/Flash (NAND, no moving parts, faster, more durable)</li>
</ul>`,
quiz:[
{q:"DRAM uses ___ and needs refreshing.",opts:["Flip-flops","Transistors","Capacitors","Registers"],ans:2,exp:"DRAM uses capacitors that leak charge, so they need constant refreshing."},
{q:"Which type of RAM is used for CPU cache?",opts:["DRAM","SRAM","SDRAM","DDR"],ans:1,exp:"SRAM is faster (uses flip-flops) and is used for cache memory."},
{q:"ROM is used to store:",opts:["User files","Applications","Bootstrap programs","Temporary data"],ans:2,exp:"ROM stores the bootstrap program that starts the computer."},
{q:"SSDs use ___ technology.",opts:["Magnetic platters","Laser/pits","NAND flash","Capacitors"],ans:2,exp:"SSDs use NAND flash technology with no moving parts."},
{q:"Which storage is volatile?",opts:["ROM","SSD","Hard Disk","RAM"],ans:3,exp:"RAM is volatile – loses all data when power is turned off."}
]},

{id:"asm",icon:"⚙️",title:"Assembly & Addressing",notes:`
<h3>Assembly Language</h3>
<p>Uses mnemonics (ADD, STO, LDD) instead of binary machine code.</p>
<h3>Addressing Modes</h3>
<ul>
<li><strong>Immediate (#)</strong> – Operand IS the value. e.g. <code>LDM #5</code> loads 5</li>
<li><strong>Direct</strong> – Operand is the ADDRESS of the value. e.g. <code>LDD 100</code></li>
<li><strong>Indirect (@)</strong> – Operand is address OF the address. e.g. <code>LDI 100</code></li>
<li><strong>Indexed</strong> – Address = base + IX register. e.g. <code>LDX 100</code> → address 100+IX</li>
</ul>
<h3>Assembler (Two-Pass)</h3>
<ul>
<li><strong>Pass 1:</strong> Scan source → build Symbol Table (labels → addresses)</li>
<li><strong>Pass 2:</strong> Translate mnemonics → machine code using Symbol Table + Opcode Table</li>
</ul>`,
quiz:[
{q:"In immediate addressing, the operand is:",opts:["A memory address","The actual value","An address of an address","Base + offset"],ans:1,exp:"Immediate = the operand itself is the data value, not an address."},
{q:"Indirect addressing means:",opts:["Value is in the operand","Operand points to address containing the address","Operand + IX","Direct memory access"],ans:1,exp:"Indirect = operand holds an address that contains ANOTHER address where the value is."},
{q:"What does Pass 1 of the assembler create?",opts:["Machine code","Object code","Symbol Table","Executable"],ans:2,exp:"Pass 1 builds the Symbol Table, mapping labels to their memory addresses."},
{q:"LDX 100 with IX=3 accesses address:",opts:["100","3","103","97"],ans:2,exp:"Indexed addressing: effective address = 100 + IX = 100 + 3 = 103."},
{q:"Assembly language uses:",opts:["Binary opcodes","Hexadecimal only","Mnemonics","High-level syntax"],ans:2,exp:"Assembly uses mnemonics like ADD, SUB, LDD as human-readable instruction codes."}
]},

{id:"sys",icon:"🖥️",title:"System Software",notes:`
<h3>Operating System Functions</h3>
<ul>
<li><strong>Memory Management</strong> – Paging & Segmentation</li>
<li><strong>Process Management</strong> – Scheduling (Round Robin, Priority, etc.)</li>
<li><strong>File Management</strong> – Naming, folders, permissions</li>
<li><strong>Device Management</strong> – Drivers for hardware</li>
<li><strong>Security</strong> – Authentication, access control</li>
</ul>
<h3>Translators</h3>
<ul>
<li><strong>Compiler</strong> – Whole source → object code. Fast execution. No source needed to run.</li>
<li><strong>Interpreter</strong> – Line by line. Easier debugging. Source needed at runtime.</li>
<li><strong>Assembler</strong> – Assembly → Machine code.</li>
</ul>
<h3>Utility Software</h3>
<p>Defragmenter, Disk Formatter, Virus Checker, Backup utilities.</p>
<h3>IDE Features</h3>
<p>Prettyprinting, context-sensitive prompts, syntax highlighting, debugger (breakpoints, stepping, variable watch).</p>`,
quiz:[
{q:"A compiler translates:",opts:["Line by line","Whole program at once","Assembly to machine code","Machine to assembly"],ans:1,exp:"Compiler translates the entire source code into object code before execution."},
{q:"Which translator is best for debugging?",opts:["Compiler","Assembler","Interpreter","Linker"],ans:2,exp:"Interpreter runs line-by-line, stopping at the error line – easier to debug."},
{q:"Paging is a type of:",opts:["File management","Memory management","Security","Scheduling"],ans:1,exp:"Paging is a memory management technique that divides memory into fixed-size pages."},
{q:"An assembler translates:",opts:["High-level to machine code","Assembly to machine code","Machine code to assembly","Binary to hex"],ans:1,exp:"An assembler converts assembly language mnemonics into machine code."},
{q:"Which is NOT a utility software?",opts:["Defragmenter","Compiler","Virus Checker","Backup"],ans:1,exp:"A compiler is a translator, not a utility. Utilities maintain/optimize the system."}
]},

{id:"security",icon:"🔒",title:"Security & Integrity",notes:`
<h3>Threats</h3>
<ul>
<li><strong>Virus</strong> – Attaches to files, needs host to spread</li>
<li><strong>Worm</strong> – Self-replicating, spreads without host</li>
<li><strong>Trojan</strong> – Disguised as legitimate software</li>
<li><strong>Spyware</strong> – Secretly monitors user activity</li>
<li><strong>Phishing</strong> – Fake emails/sites to steal credentials</li>
<li><strong>Pharming</strong> – Redirects legit URL to fake site (DNS poisoning)</li>
</ul>
<h3>Security Measures</h3>
<ul>
<li><strong>Firewall</strong> – Filters incoming/outgoing traffic</li>
<li><strong>Encryption</strong> – Scrambles data to prevent unauthorized access</li>
<li><strong>Authentication</strong> – Passwords, biometrics, 2FA</li>
</ul>
<h3>Data Integrity</h3>
<ul>
<li><strong>Validation</strong> – Presence, Format, Length, Range, Type, Check Digit</li>
<li><strong>Verification</strong> – Double entry, Visual check, Checksum, Parity check</li>
</ul>`,
quiz:[
{q:"A worm differs from a virus because it:",opts:["Needs a host file","Is less dangerous","Self-replicates without a host","Only affects hardware"],ans:2,exp:"Worms spread independently across networks without needing to attach to a host file."},
{q:"Pharming involves:",opts:["Fake emails","DNS poisoning to redirect URLs","Physical theft","Brute force attacks"],ans:1,exp:"Pharming redirects users from legitimate websites to fake ones via DNS poisoning."},
{q:"Range check is a type of:",opts:["Verification","Validation","Encryption","Authentication"],ans:1,exp:"Range check is validation – ensuring data falls within acceptable min/max values."},
{q:"Double entry is a type of:",opts:["Validation","Verification","Encryption","Hashing"],ans:1,exp:"Double entry = verification method where data is entered twice and compared."},
{q:"A firewall:",opts:["Encrypts all data","Filters network traffic","Removes viruses","Backs up data"],ans:1,exp:"A firewall monitors and filters incoming/outgoing network traffic based on rules."}
]},

{id:"logic",icon:"🔲",title:"Logic Gates",notes:`
<h3>Basic Gates</h3>
<ul>
<li><strong>AND</strong> – Output 1 only if ALL inputs are 1</li>
<li><strong>OR</strong> – Output 1 if ANY input is 1</li>
<li><strong>NOT</strong> – Inverts input (1→0, 0→1)</li>
</ul>
<h3>Universal Gates</h3>
<ul>
<li><strong>NAND</strong> – NOT + AND. Can build ANY other gate from NANDs alone.</li>
<li><strong>NOR</strong> – NOT + OR. Also universal.</li>
</ul>
<h3>XOR</h3>
<p>Output 1 when inputs are DIFFERENT. (Exclusive OR)</p>
<h3>Truth Tables</h3>
<p>Define the output for every combination of inputs. Essential for designing logic circuits.</p>`,
quiz:[
{q:"AND gate: 1 AND 0 = ?",opts:["1","0"],ans:1,exp:"AND requires ALL inputs to be 1. Since one is 0, output = 0."},
{q:"OR gate: 0 OR 1 = ?",opts:["0","1"],ans:1,exp:"OR outputs 1 if ANY input is 1."},
{q:"NAND is called universal because:",opts:["It's the most common","You can build any gate from NANDs","It uses the least power","It's the fastest"],ans:1,exp:"NAND (and NOR) gates are universal – any other gate can be constructed using only NANDs."},
{q:"XOR: 1 XOR 1 = ?",opts:["1","0"],ans:1,exp:"XOR outputs 1 only when inputs are DIFFERENT. 1 XOR 1 = same = 0."},
{q:"NOT 0 = ?",opts:["0","1"],ans:1,exp:"NOT inverts the input. NOT 0 = 1."},
{q:"What does a truth table show?",opts:["Circuit diagram","Output for all input combos","Only valid inputs","Gate symbols"],ans:1,exp:"A truth table lists every possible input combination and its corresponding output."}
]},

{id:"ethics",icon:"⚖️",title:"Ethics & Ownership",notes:`
<h3>Software Licenses</h3>
<ul>
<li><strong>Commercial</strong> – Paid, no source code access</li>
<li><strong>Open Source</strong> – Source code provided, can modify</li>
<li><strong>Shareware</strong> – Free trial, then pay</li>
<li><strong>Freeware</strong> – Free to use, no source code</li>
</ul>
<h3>Copyright</h3>
<p>Legal protection for original work (code, images, music). Prevents unauthorized copying.</p>
<h3>Professional Ethics</h3>
<p>Codes of conduct from BCS, IEEE/ACM: act in public interest, maintain competence, respect privacy.</p>`,
quiz:[
{q:"Open source software:",opts:["Cannot be modified","Provides source code","Must be paid for","Has no license"],ans:1,exp:"Open source = source code is available and can be freely modified."},
{q:"Shareware is:",opts:["Always free","Free trial then paid","Open source","Illegal"],ans:1,exp:"Shareware = try before you buy. Free trial period, then requires payment."},
{q:"Copyright protects:",opts:["Ideas only","Original creative work","Hardware designs","Network protocols"],ans:1,exp:"Copyright provides legal protection for original works like code, images, and text."},
{q:"BCS is a:",opts:["Programming language","Professional body","Hardware company","Database system"],ans:1,exp:"BCS (British Computer Society) is a professional body with codes of conduct for IT professionals."}
]},

{id:"rep",icon:"📊",title:"Data Representation",notes:`
<h3>Text Encoding</h3>
<ul>
<li><strong>ASCII</strong> – 7-bit (128 chars) or 8-bit Extended (256)</li>
<li><strong>Unicode</strong> – Variable-length (UTF-8), supports ALL world languages</li>
<li>ASCII is a subset of Unicode</li>
</ul>

<h3>Bitmap Images</h3>
<p>Image = grid of pixels, each pixel stored as a binary colour value.</p>
<div style="overflow-x:auto">
<svg viewBox="0 0 400 120" style="width:100%;max-width:400px;margin:10px auto;display:block">
<rect x="0" y="0" width="400" height="120" fill="none"/>
<!-- pixel grid -->
<rect x="10" y="10" width="20" height="20" fill="#7c5cfc" stroke="#2a2a3a"/>
<rect x="30" y="10" width="20" height="20" fill="#5ce1e6" stroke="#2a2a3a"/>
<rect x="50" y="10" width="20" height="20" fill="#7c5cfc" stroke="#2a2a3a"/>
<rect x="70" y="10" width="20" height="20" fill="#4ade80" stroke="#2a2a3a"/>
<rect x="90" y="10" width="20" height="20" fill="#5ce1e6" stroke="#2a2a3a"/>
<rect x="10" y="30" width="20" height="20" fill="#4ade80" stroke="#2a2a3a"/>
<rect x="30" y="30" width="20" height="20" fill="#f87171" stroke="#2a2a3a"/>
<rect x="50" y="30" width="20" height="20" fill="#5ce1e6" stroke="#2a2a3a"/>
<rect x="70" y="30" width="20" height="20" fill="#7c5cfc" stroke="#2a2a3a"/>
<rect x="90" y="30" width="20" height="20" fill="#f87171" stroke="#2a2a3a"/>
<rect x="10" y="50" width="20" height="20" fill="#5ce1e6" stroke="#2a2a3a"/>
<rect x="30" y="50" width="20" height="20" fill="#7c5cfc" stroke="#2a2a3a"/>
<rect x="50" y="50" width="20" height="20" fill="#4ade80" stroke="#2a2a3a"/>
<rect x="70" y="50" width="20" height="20" fill="#f87171" stroke="#2a2a3a"/>
<rect x="90" y="50" width="20" height="20" fill="#4ade80" stroke="#2a2a3a"/>
<text x="130" y="25" fill="#e0e0e8" font-size="11" font-family="Inter">← Each square = 1 pixel</text>
<text x="130" y="45" fill="#8888aa" font-size="11" font-family="Inter">Resolution = 5×3 = 15 pixels</text>
<text x="130" y="65" fill="#8888aa" font-size="11" font-family="Inter">Colour depth = bits per pixel</text>
<text x="10" y="100" fill="#5ce1e6" font-size="12" font-family="JetBrains Mono" font-weight="bold">File Size = Resolution × Colour Depth</text>
</svg>
</div>
<div class="highlight-box">
<strong>📐 Bitmap Formula:</strong><br>
<code>File Size = Width × Height × Colour Depth</code><br>
e.g. 800×600 image, 24-bit colour = 800×600×24 = 11,520,000 bits = <strong>1.44 MB</strong>
</div>

<h3>Vector Graphics</h3>
<ul>
<li>Stored as geometric objects (lines, circles, polygons) with properties (coordinates, fill, stroke)</li>
<li><strong>Key advantage:</strong> Scales without quality loss (no pixelation)</li>
<li>Smaller file size for simple images; larger for complex</li>
</ul>

<h3>Sound Representation</h3>
<p>Analogue sound wave is sampled at regular intervals to create digital approximation.</p>
<div style="overflow-x:auto">
<svg viewBox="0 0 400 130" style="width:100%;max-width:400px;margin:10px auto;display:block">
<!-- wave -->
<path d="M10,65 Q50,10 90,65 Q130,120 170,65 Q210,10 250,65 Q290,120 330,65 Q370,10 390,45" fill="none" stroke="#7c5cfc" stroke-width="2" opacity="0.4"/>
<!-- sample points -->
<line x1="30" y1="10" x2="30" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<line x1="70" y1="10" x2="70" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<line x1="110" y1="10" x2="110" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<line x1="150" y1="10" x2="150" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<line x1="190" y1="10" x2="190" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<line x1="230" y1="10" x2="230" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<line x1="270" y1="10" x2="270" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<line x1="310" y1="10" x2="310" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<line x1="350" y1="10" x2="350" y2="120" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="3"/>
<circle cx="30" cy="42" r="4" fill="#5ce1e6"/>
<circle cx="70" cy="22" r="4" fill="#5ce1e6"/>
<circle cx="110" cy="88" r="4" fill="#5ce1e6"/>
<circle cx="150" cy="105" r="4" fill="#5ce1e6"/>
<circle cx="190" cy="40" r="4" fill="#5ce1e6"/>
<circle cx="230" cy="20" r="4" fill="#5ce1e6"/>
<circle cx="270" cy="95" r="4" fill="#5ce1e6"/>
<circle cx="310" cy="100" r="4" fill="#5ce1e6"/>
<circle cx="350" cy="30" r="4" fill="#5ce1e6"/>
<!-- step reconstruction -->
<polyline points="30,42 70,42 70,22 110,22 110,88 150,88 150,105 190,105 190,40 230,40 230,20 270,20 270,95 310,95 310,100 350,100 350,30" fill="none" stroke="#4ade80" stroke-width="1.5"/>
<text x="10" y="130" fill="#8888aa" font-size="9" font-family="Inter">● = sample points | Green = digital reconstruction</text>
</svg>
</div>
<div class="highlight-box">
<strong>📐 Sound File Size Formula:</strong><br>
<code>File Size = Sampling Rate × Resolution × Duration</code><br>
e.g. 44,100 Hz × 16 bits × 3 sec = 2,116,800 bits = <strong>~265 KB</strong><br><br>
<strong>Sampling Rate</strong> = samples/second (Hz). Higher → better quality, bigger file.<br>
<strong>Sampling Resolution</strong> = bits/sample. More bits → more accurate amplitude.
</div>

<h3>Compression</h3>
<ul>
<li><strong>Lossless</strong> – Perfect reconstruction. RLE (Run Length Encoding), Huffman coding.</li>
<li><strong>Lossy</strong> – Data permanently discarded. JPEG (images), MP3 (audio). Smaller files.</li>
<li><strong>RLE example:</strong> AAABBBCC → 3A3B2C</li>
</ul>`,
quiz:[
{q:"Unicode vs ASCII – which supports more characters?",opts:["ASCII","Unicode","Both the same","Neither"],ans:1,exp:"Unicode supports virtually all world languages. ASCII only covers 128/256 characters."},
{q:"Vector graphics advantage over bitmap:",opts:["Smaller colour depth","Scales without quality loss","Faster to render","Uses pixels"],ans:1,exp:"Vectors use mathematical descriptions of shapes, so they scale perfectly at any size."},
{q:"Higher sampling rate means:",opts:["Larger file, lower quality","Smaller file","Larger file, better quality","No difference"],ans:2,exp:"More samples per second = more accurate sound reproduction, but larger file size."},
{q:"RLE is a type of ___ compression.",opts:["Lossy","Lossless"],ans:1,exp:"RLE (Run Length Encoding) is lossless – original data can be perfectly reconstructed."},
{q:"Bitmap file size depends on:",opts:["Only resolution","Only colour depth","Resolution × colour depth","File format only"],ans:2,exp:"Bitmap size = width × height × colour depth (bits per pixel)."},
{q:"Sound file size = Sampling Rate × ___ × Duration",opts:["Colour depth","Frequency","Resolution (bits/sample)","Amplitude"],ans:2,exp:"Sound file size = sampling rate × sampling resolution (bits per sample) × duration."},
{q:"Lossy compression:",opts:["Can perfectly reconstruct original","Permanently discards some data","Is always bigger","Uses RLE"],ans:1,exp:"Lossy permanently removes data for smaller size – original cannot be recovered."},
{q:"An 800×600 bitmap with 8-bit colour depth has file size:",opts:["480,000 bytes","3,840,000 bits","3,840,000 bytes","480,000 bits"],ans:1,exp:"800×600×8 = 3,840,000 bits = 480,000 bytes (÷8)."}
]}
];
