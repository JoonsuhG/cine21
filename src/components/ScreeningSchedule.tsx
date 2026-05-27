import React, { useState } from 'react';
import { Calendar, UserCheck, Flame, X, Check } from 'lucide-react';
import { Schedule } from '../types';
import { SCHEDULES } from '../data';

export default function ScreeningSchedule() {
  const [selectedSlot, setSelectedSlot] = useState<Schedule | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [bookedSeats, setBookedSeats] = useState<{ [key: string]: string[] }>({
    'sched-1': ['A3', 'B4', 'C5'],
    'sched-2': ['A1', 'C3', 'D6'],
    'sched-3': ['E2', 'F5'],
    'sched-4': ['B1', 'F8']
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleSeatClick = (seatCode: string) => {
    if (selectedSlot) {
      const isAlreadyOccupied = bookedSeats[selectedSlot.id]?.includes(seatCode);
      if (isAlreadyOccupied) return;
      setSelectedSeat(seatCode === selectedSeat ? null : seatCode);
    }
  };

  const handleBookTicket = () => {
    if (!selectedSlot || !selectedSeat) return;
    
    // Add selected seat to booked seats
    setBookedSeats(prev => ({
      ...prev,
      [selectedSlot.id]: [...(prev[selectedSlot.id] || []), selectedSeat]
    }));
    setIsBooked(true);
  };

  const resetBooking = () => {
    setSelectedSlot(null);
    setSelectedSeat(null);
    setIsBooked(false);
  };

  // Generate seats grid: rows A to E, columns 1 to 8
  const rows = ['A', 'B', 'C', 'D', 'E'];
  const cols = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section id="schedule" className="bg-[#0e0e0e] border-y border-white/5 py-16 md:py-24">
      <div className="px-6 md:px-16 max-w-[1440px] mx-auto relative overflow-hidden">
        
        {/* Absolute Background Title */}
        <div className="absolute top-0 right-0 p-8 font-sans text-8xl md:text-[10rem] font-black text-white/[0.02] select-none uppercase tracking-widest hidden lg:block leading-none">
          SCHEDULE
        </div>

        {/* Header Indicator */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 relative z-10">
          <div>
            <h2 className="font-sans text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              SCREENING_ROOM_01
            </h2>
            <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mt-2">
              EXHIBITION TIMESLOTS & DIGITAL BOOKING
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#121212] border border-primary/20 px-3 py-1.5 label-md">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-mono text-xs tracking-widest uppercase font-bold">LIVE SCHEDULE</span>
          </div>
        </div>

        {/* Schedules Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {SCHEDULES.map((slot) => (
            <div 
              key={slot.id}
              onClick={() => {
                setSelectedSlot(slot);
                setSelectedSeat(null);
                setIsBooked(false);
              }}
              className="border border-white/10 p-6 hover:bg-primary group transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-[1.3] bg-black hover:border-primary active:scale-[0.98]"
            >
              <div>
                <div className="font-mono text-xs text-primary group-hover:text-black mb-4 font-bold">
                  {slot.time}
                </div>
                <h4 className="font-sans text-xl font-black group-hover:text-black leading-tight mb-4 uppercase tracking-tighter">
                  {slot.title}
                </h4>
              </div>
              <div className="font-mono text-[10px] text-on-surface-variant group-hover:text-black/80 uppercase tracking-wider">
                {slot.info}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Booking Module Modal Style */}
        {selectedSlot && (
          <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4">
            <div className="bg-black border border-primary/40 p-6 md:p-8 w-full max-w-2xl relative noir-bloom flex flex-col md:flex-row gap-8">
              
              {/* Close Button */}
              <button 
                onClick={resetBooking}
                className="absolute top-4 right-4 text-primary hover:text-white"
                aria-label="Close booking modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Booking state condition */}
              {!isBooked ? (
                <>
                  {/* Left Column: Grid Seat Selector */}
                  <div className="flex-1">
                    <span className="text-primary font-mono text-[10px] tracking-widest uppercase font-bold block mb-2">CINEMATIC GEOMETRY</span>
                    <h3 className="font-sans text-2xl font-black text-white uppercase tracking-tight leading-none mb-6">
                      SELECT YOUR ACCESS KEY
                    </h3>

                    {/* Screening Stage representation line */}
                    <div className="w-full h-1 bg-primary text-center mb-6 relative">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black border border-primary/20 px-3 py-0.5 text-[8px] font-mono text-primary uppercase">
                        EXHIBITION CANVAS (SCREEN)
                      </span>
                    </div>

                    {/* Seat list */}
                    <div className="space-y-2 mt-8">
                      {rows.map((row) => (
                        <div key={row} className="flex justify-between items-center gap-2">
                          <span className="font-mono text-[10px] text-white/40 w-4 font-bold">{row}</span>
                          <div className="flex gap-1.5 justify-between flex-1">
                            {cols.map((col) => {
                              const seatCode = `${row}${col}`;
                              const isOccupied = bookedSeats[selectedSlot.id]?.includes(seatCode);
                              const isSelected = selectedSeat === seatCode;

                              return (
                                <button
                                  key={col}
                                  onClick={() => handleSeatClick(seatCode)}
                                  className={`flex-1 aspect-square font-mono text-[9px] font-bold transition-all border ${
                                    isOccupied
                                      ? 'bg-white/5 border-white/5 text-white/10 cursor-not-allowed'
                                      : isSelected
                                      ? 'bg-primary border-primary text-black'
                                      : 'bg-black border-white/10 text-on-surface-variant hover:border-primary/60'
                                  }`}
                                  disabled={isOccupied}
                                  title={isOccupied ? 'Occupied Node' : `Seat ${seatCode}`}
                                >
                                  {col}
                                </button>
                              );
                            })}
                          </div>
                          <span className="font-mono text-[10px] text-white/40 w-4 font-bold text-right">{row}</span>
                        </div>
                      ))}
                    </div>

                    {/* Legend */}
                    <div className="flex gap-4 mt-6 text-[10px] font-mono justify-center text-on-surface-variant border-t border-white/5 pt-4">
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 border border-white/10 block bg-black" />
                        <span>AVAILABLE</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-primary border border-primary block" />
                        <span>SELECTED</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-white/5 border border-white/5 text-white/10 block" />
                        <span>OCCUPIED</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Ticket Invoice summary */}
                  <div className="w-full md:w-56 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6">
                    <div className="space-y-4 text-left">
                      <span className="font-mono text-[10px] bg-primary text-black px-2 py-0.5 uppercase tracking-widest font-extrabold">INVOICE PREVIEW</span>
                      <div className="mt-2 text-white">
                        <p className="font-mono text-xs text-primary font-bold">{selectedSlot.time}</p>
                        <h4 className="font-sans font-black text-xl tracking-tighter uppercase leading-none mt-1">
                          {selectedSlot.title}
                        </h4>
                        <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-1">
                          {selectedSlot.info}
                        </p>
                      </div>

                      <div className="border-t border-dashed border-white/20 pt-4 space-y-2 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-on-surface-variant">NODE TICKET:</span>
                          <span className="text-white">1 PASS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-on-surface-variant">SEAT KEY:</span>
                          <span className={selectedSeat ? "text-primary font-bold text-sm" : "text-white/30"}>
                            {selectedSeat || 'UNSELECTED'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-on-surface-variant">SYSTEM PRICE:</span>
                          <span className="text-white">¤12,000 KRW</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleBookTicket}
                      disabled={!selectedSeat}
                      className={`w-full py-4 uppercase font-mono text-xs tracking-widest font-bold mt-8 transition-all ${
                        selectedSeat
                          ? 'bg-primary text-black hover:bg-white'
                          : 'bg-white/5 border border-white/10 text-white/20 cursor-not-allowed'
                      }`}
                    >
                      CONFIRM PASS DOCK
                    </button>
                  </div>
                </>
              ) : (
                /* Success Animated Thermal Ticket Receipt Card */
                <div className="w-full flex flex-col items-center py-6 text-center select-none animate-[fade-in_0.3s_ease] text-left">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-black stroke-[3px]" />
                  </div>
                  <h3 className="font-sans text-3xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                    EXHIBITION TICKET SAVED
                  </h3>
                  <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-8">
                    SYNCHRONIZATION COMPLETED WITH SYSTEM NODE
                  </p>

                  {/* Thermal Ticket visualization */}
                  <div className="bg-white text-black p-6 w-72 border border-black/10 font-mono text-xs relative overflow-hidden text-left mb-6 noir-bloom">
                    {/* Visual notches on sides */}
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black"></div>
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black"></div>

                    <div className="border-b border-dashed border-black/30 pb-3 mb-3 text-center">
                      <p className="font-sans font-black text-lg tracking-widest">CINE21 DOCKED PASS</p>
                      <p className="text-[9px] opacity-70 mt-0.5">ESTABLISHED ON DOCKED NODE-2026</p>
                    </div>

                    <div className="space-y-1 text-xs">
                      <p className="text-[9px] opacity-50 uppercase">TARGET RECITAL</p>
                      <p className="font-sans font-extrabold text-sm uppercase leading-none tracking-tight mb-2">
                        {selectedSlot.title}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/10">
                        <div>
                          <p className="text-[8px] opacity-50">ACCESS TIME</p>
                          <p className="font-bold">{selectedSlot.time}</p>
                        </div>
                        <div>
                          <p className="text-[8px] opacity-50">NODE SEAT</p>
                          <p className="font-bold text-sm text-indigo-700">{selectedSeat}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-[8px] opacity-50">DOCK ID CODE</p>
                        <p className="font-mono text-[9px] text-[10px] select-all">C21_P-{selectedSlot.id.toUpperCase()}-{selectedSeat}-2605</p>
                      </div>
                    </div>

                    {/* Barcode Simulator */}
                    <div className="mt-6 border-t border-black/10 pt-4 flex flex-col items-center">
                      <div className="w-full h-11 bg-black flex gap-0.5">
                        {/* Fake barcode spikes mapping */}
                        {Array.from({ length: 44 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-full flex-grow bg-black ${i % 3 === 0 || i % 7 === 0 ? 'bg-white' : ''}`}
                          />
                        ))}
                      </div>
                      <p className="text-[8px] mt-1.5 opacity-60">* REGISTERED MOBILE INGRESS *</p>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-on-surface-variant max-w-sm mb-6 leading-relaxed">
                    This ticket has been bound to your local browser storage node and email register. Bring this screen to the gate for quick optic scanning.
                  </p>

                  <button 
                    onClick={resetBooking}
                    className="border border-white/20 text-white font-mono text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-white hover:text-black transition-colors"
                  >
                    DOCK EXIT
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
