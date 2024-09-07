'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function CreateForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
  }
  return (
    <div className="w-full max-w-2xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === 1
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            1
          </div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === 2
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            2
          </div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === 3
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            3
          </div>
        </div>
        <div className="text-muted-foreground">Step {currentStep} of 3</div>
      </div>
      {currentStep === 1 && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
            <p className="text-muted-foreground">
              Please provide your personal details.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Address</h2>
            <p className="text-muted-foreground">
              Please provide your address details.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="street">Street</Label>
              <Input id="street" placeholder="Enter your street address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Enter your city" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder="Enter your state" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">Zip Code</Label>
              <Input id="zip" placeholder="Enter your zip code" />
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handlePrevious}>
              Previous
            </Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Payment</h2>
            <p className="text-muted-foreground">
              Please provide your payment details.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="Enter your card number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input id="expiry-date" placeholder="MM/YY" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="Enter your CVV" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name-on-card">Name on Card</Label>
              <Input
                id="name-on-card"
                placeholder="Enter the name on your card"
              />
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handlePrevious}>
              Previous
            </Button>
            <Button>Submit</Button>
          </div>
        </div>
      )}
    </div>
  )
}
