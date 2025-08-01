// SalesHint Demo Animation Logic
document.addEventListener('DOMContentLoaded', function() {
    const listenBtn = document.getElementById('listenBtn');
    const respondBtn = document.querySelector('.respond');
    const notesBtn = document.querySelector('.notes');
    const notesModal = document.getElementById('notesModal');
    const closeNotesBtn = document.getElementById('closeNotes');
    const emailBtn = document.querySelector('.email');
    const emailModal = document.getElementById('emailModal');
    const closeEmailBtn = document.getElementById('closeEmail');
    const sendEmailBtn = document.querySelector('.send-email-btn');
    const aiPanels = document.getElementById('aiPanels');
    const aiResponseContent = document.getElementById('aiResponseContent');
    const transcriptContent = document.getElementById('transcriptContent');
    const prospectSpeaking = document.getElementById('prospectSpeaking');
    const salespersonSpeaking = document.getElementById('salespersonSpeaking');
    
    let isListening = false;
    let currentStep = 0;
    let waitingForResponse = false;
    let currentResponseIndex = 0;
    
    // Mock sales conversation
    const conversation = [
        {
            speaker: 'prospect',
            text: "Hi there! Thanks for taking the time to meet with me today. I've been looking into solutions for our team's productivity challenges.",
            duration: 4000
        },
        {
            speaker: 'salesperson',
            text: "Absolutely, David! I'm excited to learn more about your challenges and see how we can help your team be more productive.",
            duration: 3000
        },
        {
            speaker: 'prospect', 
            text: "Well, our main issue is that our sales team spends too much time on administrative tasks instead of actually selling. What can you offer?",
            duration: 3500
        },
        {
            speaker: 'salesperson',
            text: "That's a common challenge we help solve. Our AI assistant can automate many of those administrative tasks, freeing up your team to focus on high-value activities.",
            duration: 4000
        },
        {
            speaker: 'prospect',
            text: "That sounds interesting, but we've tried automation tools before and they didn't really deliver on their promises. How is this different?",
            duration: 3500
        },
        {
            speaker: 'salesperson',
            text: "I understand your skepticism - many companies have had similar experiences. What specific automation tools have you tried before, and what were the main shortcomings?",
            duration: 4000
        }
    ];
    
    // AI responses corresponding to sales scenarios
    const aiResponses = [
        {
            scenario: "Opening conversation",
            responseType: "RAPPORT BUILDING",
            response: "Great opening! Here's how to build on this momentum:\n\n**Key Points:**\n• Acknowledge their time investment\n• Show genuine interest in their challenges\n• Position yourself as a problem solver\n\n**Next Steps:**\n1. Ask about their current productivity metrics\n2. Understand their team size and structure\n3. Identify their biggest pain points\n\nThis sets up a consultative approach rather than a product pitch.",
            script: `\"David, I appreciate you taking the time today. Before we dive into solutions, I'd love to understand more about your team structure and what specific productivity challenges you're seeing day-to-day.\"`
        },
        {
            scenario: "Interest confirmation",
            responseType: "PAIN POINT DISCOVERY",
            response: "Perfect! They've identified a clear pain point. Now dig deeper:\n\n**Discovery Questions:**\n• What percentage of time is spent on admin vs selling?\n• Which admin tasks are most time-consuming?\n• How is this impacting revenue goals?\n• What's the cost of this inefficiency?\n\n**Value Positioning:**\n• Position time savings as revenue opportunity\n• Quantify the impact with specific metrics\n• Create urgency around lost opportunities",
            script: `\"That's exactly what we help solve. Can you quantify this for me - what percentage of your team's time would you estimate goes to admin work versus actual selling activities?\"`
        },
        {
            scenario: "Objection handling",
            responseType: "CREDIBILITY BUILDING",
            response: "Classic objection! Handle this with empathy and proof:\n\n**Objection Response Framework:**\n1. Acknowledge their experience\n2. Ask for specifics about past failures\n3. Differentiate your solution\n4. Provide social proof\n\n**Key Differentiators:**\n• Real-time AI assistance vs static automation\n• Learning from actual conversations\n• Integration with existing workflows\n• Measurable ROI within 30 days",
            script: `\"I completely understand that concern - we hear this often from prospects who've been burned by overpromising vendors. What specifically didn't work with your previous tools? Was it poor integration, lack of customization, or something else?\"`
        }
    ];
    
    // Auto-start demo after 1 second
    setTimeout(() => {
        startDemo();
        // Auto-start listening after another 2 seconds
        setTimeout(() => {
            startListening();
        }, 2000);
    }, 1000);
    
    // Listen button click handler
    listenBtn.addEventListener('click', function() {
        if (!isListening) {
            startListening();
        } else {
            stopListening();
        }
    });
    
    // Respond button click handler
    respondBtn.addEventListener('click', function() {
        if (waitingForResponse) {
            showAIResponse();
        }
    });
    
    // Notes button click handler
    notesBtn.addEventListener('click', function() {
        notesModal.style.display = 'flex';
    });
    
    // Close notes modal
    closeNotesBtn.addEventListener('click', function() {
        notesModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    notesModal.addEventListener('click', function(e) {
        if (e.target === notesModal) {
            notesModal.style.display = 'none';
        }
    });
    
    // Email button click handler
    emailBtn.addEventListener('click', function() {
        emailModal.style.display = 'flex';
    });
    
    // Close email modal
    closeEmailBtn.addEventListener('click', function() {
        emailModal.style.display = 'none';
    });
    
    // Close email modal when clicking outside
    emailModal.addEventListener('click', function(e) {
        if (e.target === emailModal) {
            emailModal.style.display = 'none';
        }
    });
    
    // Send email button
    sendEmailBtn.addEventListener('click', function() {
        // Show success animation
        sendEmailBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            Email Sent!
        `;
        sendEmailBtn.style.backgroundColor = '#10b981';
        
        // Close modal after 1.5 seconds
        setTimeout(() => {
            emailModal.style.display = 'none';
            // Reset button
            setTimeout(() => {
                sendEmailBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22,2 15,22 11,13 2,9"/>
                    </svg>
                    Send Email
                `;
                sendEmailBtn.style.backgroundColor = '#3b82f6';
            }, 500);
        }, 1500);
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'l') {
            e.preventDefault();
            if (!isListening) {
                startListening();
            } else {
                stopListening();
            }
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            e.preventDefault();
            if (waitingForResponse) {
                showAIResponse();
            }
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
            e.preventDefault();
            notesModal.style.display = 'flex';
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
            e.preventDefault();
            emailModal.style.display = 'flex';
        }
    });
    
    function startDemo() {
        // Add subtle pulse to listen button to indicate it's ready
        listenBtn.style.animation = 'pulse-recording 3s infinite';
    }
    
    function startListening() {
        isListening = true;
        currentStep = 0;
        waitingForResponse = false;
        
        // Update button state
        listenBtn.classList.add('listening');
        listenBtn.innerHTML = `
            <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
            </svg>
            Stop Listen <span class="shortcut">(⌘L)</span>
        `;
        listenBtn.style.animation = 'none';
        
        // Reset button states
        respondBtn.classList.remove('highlighted', 'clicked');
        respondBtn.style.animation = 'none';
        
        // Show AI panels
        aiPanels.style.display = 'grid';
        setTimeout(() => {
            aiPanels.classList.add('show');
        }, 100);
        
        // Clear previous content
        transcriptContent.innerHTML = '<div class="transcript-placeholder">Listening for speech...</div>';
        aiResponseContent.innerHTML = '<div class="thinking">Analyzing conversation...</div>';
        
        // Start the conversation simulation
        setTimeout(() => {
            simulateConversation();
        }, 1000);
    }
    
    function stopListening() {
        isListening = false;
        waitingForResponse = false;
        
        // Reset button states
        listenBtn.classList.remove('listening');
        listenBtn.innerHTML = `
            <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
            Start Listen <span class="shortcut">(⌘L)</span>
        `;
        listenBtn.style.animation = 'pulse-recording 3s infinite';
        
        // Reset other buttons
        respondBtn.classList.remove('highlighted', 'clicked');
        respondBtn.style.animation = 'none';
        
        // Hide AI panels
        aiPanels.classList.remove('show');
        setTimeout(() => {
            aiPanels.style.display = 'none';
        }, 800);
        
        // Reset speaking indicators
        prospectSpeaking.classList.remove('active');
        salespersonSpeaking.classList.remove('active');
        document.querySelector('.video-participant.prospect').classList.remove('speaking');
        document.querySelector('.video-participant.salesperson').classList.remove('speaking');
    }
    
    function simulateConversation() {
        if (!isListening) return;
        
        // Check if we've reached the end of conversation - restart the demo
        if (currentStep >= conversation.length) {
            setTimeout(() => {
                restartDemo();
            }, 3000);
            return;
        }
        
        const current = conversation[currentStep];
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
        
        // Show speaking indicator
        if (current.speaker === 'prospect') {
            prospectSpeaking.classList.add('active');
            document.querySelector('.video-participant.prospect').classList.add('speaking');
            salespersonSpeaking.classList.remove('active');
            document.querySelector('.video-participant.salesperson').classList.remove('speaking');
        } else {
            salespersonSpeaking.classList.add('active');
            document.querySelector('.video-participant.salesperson').classList.add('speaking');
            prospectSpeaking.classList.remove('active');
            document.querySelector('.video-participant.prospect').classList.remove('speaking');
        }
        
        // Add to transcript
        addTranscriptEntry(current.speaker, current.text, timestamp);
        
        // Highlight Respond button for prospect questions/objections
        if (current.speaker === 'prospect' && currentStep < aiResponses.length) {
            setTimeout(() => {
                highlightRespondButton(currentStep);
            }, 1000);
        }
        
        // Auto-show notes modal after first AI response is displayed
        if (current.speaker === 'prospect' && currentStep === 0) {
            setTimeout(() => {
                // Wait for AI response to show, then show notes
                setTimeout(() => {
                    notesModal.style.display = 'flex';
                    // Auto-close notes after 4 seconds
                    setTimeout(() => {
                        notesModal.style.display = 'none';
                        // Show email modal 2 seconds after notes close
                        setTimeout(() => {
                            emailModal.style.display = 'flex';
                            // Auto-close email after 5 seconds
                            setTimeout(() => {
                                emailModal.style.display = 'none';
                            }, 5000);
                        }, 2000);
                    }, 4000);
                }, 4000); // Show notes 4 seconds after AI response appears
            }, 2000);
        }
        
        // Continue conversation
        setTimeout(() => {
            // Remove speaking indicator
            prospectSpeaking.classList.remove('active');
            salespersonSpeaking.classList.remove('active');
            document.querySelector('.video-participant.prospect').classList.remove('speaking');
            document.querySelector('.video-participant.salesperson').classList.remove('speaking');
            
            currentStep++;
            setTimeout(() => {
                simulateConversation();
            }, 500);
        }, current.duration);
    }
    
    function restartDemo() {
        if (!isListening) return;
        
        // Reset conversation state
        currentStep = 0;
        
        // Clear transcript and AI response
        transcriptContent.innerHTML = '<div class="transcript-placeholder">Listening for speech...</div>';
        aiResponseContent.innerHTML = '<div class="thinking">Analyzing conversation...</div>';
        
        // Start conversation again after a brief pause
        setTimeout(() => {
            simulateConversation();
        }, 1000);
    }
    
    function addTranscriptEntry(speaker, text, timestamp) {
        // Remove placeholder if it exists
        const placeholder = transcriptContent.querySelector('.transcript-placeholder');
        if (placeholder) {
            placeholder.remove();
        }
        
        const entry = document.createElement('div');
        entry.className = `transcript-entry ${speaker}`;
        
        const speakerName = speaker === 'prospect' ? 'David Thompson' : 'You';
        const speakerClass = speaker === 'prospect' ? 'speaker-prospect' : 'speaker-salesperson';
        
        entry.innerHTML = `
            <div class="${speakerClass}">
                ${speakerName}
                <span class="transcript-timestamp">${timestamp}</span>
            </div>
            <div class="transcript-text">${text}</div>
        `;
        
        transcriptContent.appendChild(entry);
        transcriptContent.scrollTop = transcriptContent.scrollHeight;
    }
    
    function highlightRespondButton(responseIndex) {
        if (responseIndex >= aiResponses.length) return;
        
        // Set waiting state
        waitingForResponse = true;
        currentResponseIndex = responseIndex;
        
        // Highlight respond button with pulse animation
        respondBtn.classList.add('highlighted');
        respondBtn.style.animation = 'pulse-respond 2s infinite';
        
        // Auto-click respond after 3 seconds for demo flow
        setTimeout(() => {
            if (waitingForResponse) {
                showAIResponse();
            }
        }, 3000);
    }
    
    function showAIResponse() {
        if (!waitingForResponse || currentResponseIndex >= aiResponses.length) return;
        
        const response = aiResponses[currentResponseIndex];
        
        // Remove highlight and add clicked state
        respondBtn.classList.remove('highlighted');
        respondBtn.classList.add('clicked');
        respondBtn.style.animation = 'none';
        
        // Show thinking state first
        aiResponseContent.innerHTML = '<div class="thinking">Analyzing conversation...</div>';
        
        setTimeout(() => {
            aiResponseContent.innerHTML = `
                <div class="response-type">${response.responseType}</div>
                <div class="ai-response">${response.response}</div>
                ${response.script ? `<div class="sales-script">${response.script}</div>` : ''}
            `;
            aiResponseContent.scrollTop = 0;
            
            // Keep the clicked glow effect for 5 seconds, then remove it
            setTimeout(() => {
                respondBtn.classList.remove('clicked');
            }, 5000);
        }, 1500);
        
        waitingForResponse = false;
    }
});