# Secure AI WhatsApp Customer Service Automation (n8n)

This project demonstrates a production-ready AI-powered WhatsApp customer service workflow
built with n8n, focusing on security, reliability, and real-world usage.

## Problem
Customer service teams are overloaded with repetitive WhatsApp messages,
leading to slow response times and inconsistent answers.

## Solution
A self-hosted n8n workflow that:
- Receives incoming WhatsApp messages via webhook
- Uses an LLM to generate context-aware responses
- Applies confidence-based routing (AI vs human)
- Logs all conversations securely
- Protects webhooks with signature validation

## Workflow Overview
Webhook → Validation → AI Processing → Decision Logic → Response → Logging

## Key Features
- Self-hosted n8n (Docker-ready)
- Secure webhook signature verification
- OpenAI-compatible LLM integration
- Confidence threshold & fallback handling
- Centralized logging for auditability

## Security Considerations
- Webhook HMAC signature verification
- Secrets stored in environment variables
- Rate limiting support
- Input sanitization before AI processing

## Tech Stack
- n8n
- Node.js
- OpenAI API (or compatible LLM)
- Docker
- Webhook-based integration

## Sample Input
```json
{
  "from": "+628xxxxxx",
  "message": "What are your business hours?"
}
