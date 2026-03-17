import { GET } from '@/app/health/route'
import { NextResponse } from 'next/server'

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data) => ({
      json: () => data,
      status: 200,
    })),
  },
}))

describe('Health Check API', () => {
  it('should return healthy status', async () => {
    const response = await GET()
    const data = await response.json()
    
    expect(data.status).toBe('healthy')
    expect(data.service).toBe('ngentech')
  })

  it('should return correct service name', async () => {
    const response = await GET()
    const data = await response.json()
    
    expect(data).toHaveProperty('status')
    expect(data).toHaveProperty('service')
    expect(typeof data.status).toBe('string')
    expect(typeof data.service).toBe('string')
  })
})
