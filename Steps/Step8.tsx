'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

export default function Step8() {
  const [isOperating, setIsOperating] = useState<'ja' | 'nein'>('ja');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    { label: 'Member management', value: 'member' },
    { label: 'Contribution management', value: 'contribution' },
    { label: 'Events and organizational operations', value: 'events' },
    { label: 'Statutory public relations work', value: 'relations' },
    { label: 'Donation and fundraising', value: 'donation' },
  ];

  const toggleOption = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((v) => v !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md max-w-4xl mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-2">
        Do you operate according to statutes or rules of procedure? (e.g., as an association or non-profit organization)
      </h2>
      <p className="text-sm text-blue-600 underline cursor-pointer mb-4">Show explanations</p>

      <div className="flex gap-4 mb-6">
        <Button
          variant={isOperating === 'ja' ? 'default' : 'outline'}
          onClick={() => setIsOperating('ja')}
          className={cn('w-20', isOperating === 'ja' && 'bg-green-500 hover:bg-green-600')}
        >
          ja
        </Button>
        <Button
          variant={isOperating === 'nein' ? 'default' : 'outline'}
          onClick={() => setIsOperating('nein')}
          className={cn('w-20', isOperating === 'nein' && 'bg-gray-400 hover:bg-gray-500')}
        >
          nein
        </Button>
      </div>

      {isOperating === 'ja' && (
        <>
          <p className="mb-4">Please select from the following options or input options, if applicable:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {options.map((option) => (
              <Card
                key={option.value}
                onClick={() => toggleOption(option.value)}
                className={cn(
                  'cursor-pointer transition-all',
                  selectedOptions.includes(option.value) ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                )}
              >
                <CardContent className="flex items-center justify-center p-6 text-center h-24">
                  {option.label}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Input placeholder="Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen" className="flex-1" />
            <Button variant="outline" size="icon">
              🔍
            </Button>
            <p className="text-blue-600 text-sm underline cursor-pointer">Show all</p>
          </div>
        </>
      )}

      <Button className="w-full bg-blue-100 text-black hover:bg-blue-200 shadow-md">
        Show preview
      </Button>
    </div>
  );
}
