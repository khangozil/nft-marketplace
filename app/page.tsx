"use client";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";

// Define the NFT type
interface NFT {
  id: number;
  title: string;
  description: string;
  image: string;
  creator: string;
  edition: string;
  rarity: string;
  price: string;
}

const NFTMarketplace = () => {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null); // Type for selectedNFT
  const [walletConnected, setWalletConnected] = useState(false);
  const [error, setError] = useState("");

  const dummyNFTs: NFT[] = [
    // Type for dummyNFTs
    {
      id: 1,
      title: "Cosmic Dreamer #001",
      description:
        "A mesmerizing digital artwork capturing the essence of cosmic dreams",
      image: "images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
      creator: "Astro Artist",
      edition: "1 of 10",
      rarity: "Legendary",
      price: "2.5 TON",
    },
    {
      id: 2,
      title: "Digital Phoenix #025",
      description:
        "Rising from digital ashes, this phoenix represents rebirth in the metaverse",
      image: "images.unsplash.com/photo-1620641788421-7a1c342ea42e",
      creator: "Meta Creator",
      edition: "3 of 15",
      rarity: "Epic",
      price: "1.8 TON",
    },
    {
      id: 3,
      title: "Neon Samurai #103",
      description:
        "A cyberpunk warrior wielding ancient traditions in a digital realm",
      image: "images.unsplash.com/photo-1615799998603-7c6270a45196",
      creator: "Cyber Artist",
      edition: "5 of 20",
      rarity: "Rare",
      price: "1.2 TON",
    },
  ];

  const handleWalletConnection = async () => {
    try {
      setError("");
      // Simulating wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setWalletConnected(true);
    } catch (err) {
      setError("Failed to connect wallet. Please try again.");
    }
  };

  const WalletButton = () => (
    <button
      onClick={handleWalletConnection}
      className="group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white transition-all hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-purple-500 active:scale-95"
      disabled={walletConnected}
    >
      <RiWallet3Line className="h-5 w-5" />
      {walletConnected ? "Wallet Connected" : "Connect Wallet"}
      {error && (
        <div className="absolute -bottom-12 left-0 w-full rounded-lg bg-red-500 p-2 text-sm text-white">
          {error}
        </div>
      )}
    </button>
  );

  const NFTCard = (
    { nft }: { nft: NFT } // Explicitly typed prop
  ) => (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white p-3 shadow-xl transition-all hover:shadow-2xl"
      onClick={() => setSelectedNFT(nft)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={`https://${nft.image}`}
          alt={nft.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{nft.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{nft.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-purple-600">
            {nft.price}
          </span>
          <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm text-white transition-all hover:bg-purple-700">
            View Details
          </button>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/75 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <p>
          <span className="font-bold">Creator:</span> {nft.creator}
        </p>
        <p>
          <span className="font-bold">Edition:</span> {nft.edition}
        </p>
        <p>
          <span className="font-bold">Rarity:</span> {nft.rarity}
        </p>
      </div>
    </div>
  );

  const NFTDetailView = (
    { nft }: { nft: NFT } // Explicitly typed prop
  ) => (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => setSelectedNFT(null)}
        className="mb-6 flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition-all hover:bg-gray-700"
      >
        <FaArrowLeft /> Back
      </button>
      <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-xl md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <img
            src={`https://${nft.image}`}
            alt={nft.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{nft.title}</h1>
            <p className="mt-2 text-gray-600">{nft.description}</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-bold">Creator:</span> {nft.creator}
            </p>
            <p className="text-lg">
              <span className="font-bold">Edition:</span> {nft.edition}
            </p>
            <p className="text-lg">
              <span className="font-bold">Rarity:</span> {nft.rarity}
            </p>
            <p className="text-2xl font-bold text-purple-600">{nft.price}</p>
          </div>
          <div className="flex gap-4">
            <button
              className="flex-1 rounded-xl bg-purple-600 py-3 text-white transition-all hover:bg-purple-700"
              aria-label="Buy NFT"
            >
              Buy Now
            </button>
          </div>
          <div className="flex gap-4">
            <button
              className="rounded-full bg-blue-400 p-3 text-white transition-all hover:bg-blue-500"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </button>
            <button
              className="rounded-full bg-blue-600 p-3 text-white transition-all hover:bg-blue-700"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="h-6 w-6" />
            </button>
            <button
              className="rounded-full bg-pink-600 p-3 text-white transition-all hover:bg-pink-700"
              aria-label="Share on Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">NFT Marketplace</h1>
          <WalletButton />
        </div>
        {selectedNFT ? (
          <NFTDetailView nft={selectedNFT} />
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dummyNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTMarketplace;
